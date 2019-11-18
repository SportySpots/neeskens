/* eslint-disable max-len,no-tabs */
import React from 'react'

//------------------------------------------------------------------------------
// CONSTANTS:
//------------------------------------------------------------------------------

interface IState {
    location: string
    locations: Record<string, string>
    sport: string
    sports: Record<string, string>
    date: string
    dates: Record<string, string>
}

interface IProps extends IState {
    setLocation: (location: string) => void
    setSport: (sport: string) => void
    setDate: (date: string) => void
}

// The defaultValue argument is ONLY used when a component does not have a matching
// Provider above it in the tree. This can be helpful for testing components in isolation
// without wrapping them. Note: passing undefined as a Provider value does not cause
// consuming components to use defaultValue.
const defaultValue: IProps = {
    setLocation: () => null,
    setSport: () => null,
    setDate: () => null,
    location: 'Amsterdam',
    locations: { amsterdam: 'Amsterdam', rotterdam: 'Rotterdam' },
    sport: '1234',
    date: '2020',
    dates: {
        anydate: 'Any date',
        today: 'Today',
        tomorrow: 'Tomorrow',
        thisweek: 'This week',
        nextweek: 'Next week',
    },
    sports: { football: 'Football', tennis: 'Tennis' },
}

export const FilterContext = React.createContext(defaultValue)

export class FilterProvider extends React.Component<{ children: any }, IState> {
    state: IState = {
        location: defaultValue.location,
        locations: defaultValue.locations,
        sport: defaultValue.sport,
        date: defaultValue.date,
        dates: defaultValue.dates,
        sports: defaultValue.sports,
    }

    async componentDidMount() {}

    render() {
        const { children } = this.props
        const providerValue: IProps = {
            ...this.state,
            setLocation: location => this.setState({ location }),
            setSport: sport => this.setState({ sport }),
            setDate: date => this.setState({ date }),
        }

        return (
            <FilterContext.Provider value={providerValue}>
                {children}
            </FilterContext.Provider>
        )
    }
}

export const FilterConsumer = FilterContext.Consumer

export const withFilter = <P extends object>(
    Component: React.ComponentType<IProps & P>
) =>
    React.forwardRef((props: P, ref) => (
        <FilterConsumer>
            {(filterProps: IProps) => (
                <Component ref={ref} {...props} {...filterProps} />
            )}
        </FilterConsumer>
    ))
