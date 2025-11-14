import{j as r,r as x}from"./iframe-tJv_x5rY.js";import{c as a,u as l,F as d,t as j}from"./Form-jEx2y5xc.js";import{L as o}from"./Label-RjTzOsfv.js";import{R as c,S as f}from"./ResetButton-DjXvyyaO.js";import{B as p}from"./Button-BFrhyxcx.js";import{S as g,s as u}from"./Section-C3zFkOR2.js";import{A as b}from"./ActionGroup-ofmp5p0b.js";import{N as t,x as E,F as S}from"./Modal-C5nUCLYg.js";import"./index-nuYtCEEu.js";import"./dynamic-D0IhEVDX.js";import"./flowComponent-BVSszHbm.js";import"./index-CMtXtWIZ.js";import"./clsx-B-dksMZM.js";import"./index-zslH_nwp.js";import"./useLocalizedStringFormatter-CiAHydpr.js";import"./context-DzrJfCbv.js";import"./browser-TdwBVE6G.js";import"./utils-CzbxkoY8.js";import"./ProgressBar-DMZ3QrgP.js";import"./Hidden-CHKvPT1V.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-3nJf9pka.js";import"./Text-Dguu0ahS.js";import"./EmulatedBoldText-BtPGtFYn.js";import"./LoadingSpinner-Bcrzivl8.js";import"./Button-DANMsRvu.js";import"./useFocusRing-Dd-6aCTP.js";import"./useFocusable-Cd_sv4rm.js";import"./context-B6V5mJe_.js";import"./RSPContexts-B20KOh4s.js";import"./Collection-avSZv3ZD.js";import"./CollectionBuilder-SdndXulF.js";import"./SelectionIndicator-tJZm1Uu-.js";import"./Separator-PZWkpAPz.js";import"./useStatic-ChHmkVJf.js";import"./getActionGroupSlot-Bx9-2150.js";import"./FileCardList-xvc84fPF.js";import"./Avatar-DCjhmqbI.js";import"./AlertIcon-BmIRgy9X.js";import"./Image-BsEx4Gyw.js";import"./Link-CNQmH85M.js";import"./ControlledNotification-Bf-cHYr4.js";import"./LayoutCard-FaDrJ9hh.js";import"./Accordion-BkjCzJbI.js";import"./Alert-BSKDhqn2.js";import"./AlertBadge-DwpbJvbe.js";import"./Align-CwffRYKZ.js";import"./AvatarStack-Dk_NcqSD.js";import"./BigNumber-CVotIBh9.js";import"./Breadcrumb-CqycGyzj.js";import"./Heading-DBV7hltH.js";import"./Legend-DwZKxd2C.js";import"./Color-DCrxZZxn.js";import"./TableFooterRow-CTXom9Ef.js";import"./SkeletonText-D85nAxtU.js";import"./Content-B6i-pyoJ.js";import"./CounterBadge-C7SQltDy.js";import"./DonutChart-BF3qOkbv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D5HLqNns.js";import"./Header-DsWh8L6x.js";import"./Initials-WnEx4zz5.js";import"./InlineCode-B62lvli0.js";import"./Separator-CYyKLl0S.js";import"./MessageSeparator-DELmev1y.js";import"./NavigationGroup-DtKUP1MG.js";import"./Notification-kUETDS4p.js";import"./NotificationProvider-Cl16zYR0.js";import"./ProgressBar-4Q8djMZo.js";import"./Rating-BBipw1Rp.js";import"./Skeleton-DtEBxlD8.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Cr as __namedExportsOrder,kr as default};
