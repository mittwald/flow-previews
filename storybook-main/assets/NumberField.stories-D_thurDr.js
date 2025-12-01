import{j as r,r as x}from"./iframe-B7t5ja2b.js";import{b as a,u as l,F as d,t as j}from"./Form-C3pD7NJq.js";import{L as o}from"./Label-Db92ClKs.js";import{R as c,S as f}from"./ResetButton-Dw3e6HTx.js";import{B as p}from"./Button-BoOZwgfJ.js";import{S as g,s as u}from"./Section-oj7pNCYW.js";import{A as b}from"./ActionGroup-X0GeQX8f.js";import{N as t,v as E,g as S}from"./TimeField-DU2gwGxd.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DFqFR_25.js";import"./PropsContextProvider-DYQFvX9W.js";import"./mergeRefs-CZ0PXAOw.js";import"./index-0JV4jXfB.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BbtlMh8_.js";import"./context-DT7PsWv1.js";import"./browser-Dz7UytJe.js";import"./utils-DDfw_94E.js";import"./ProgressBar-CHM1Xifb.js";import"./Hidden-BQUVCBE1.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DPxPg2Ca.js";import"./Text-CDnJtWF_.js";import"./EmulatedBoldText-56hmy21w.js";import"./LoadingSpinner-CmbUgNIV.js";import"./Button-B-5trTj2.js";import"./useFocusRing-6FEqbhUJ.js";import"./useFocusable-CX5magUq.js";import"./context-XJw--O2B.js";import"./RSPContexts-BRH8-qft.js";import"./Collection-DAazmHys.js";import"./CollectionBuilder-CJZxBA1k.js";import"./SelectionIndicator-BZI_ZwZN.js";import"./Separator-BYhTCqx2.js";import"./useStatic-BJbQzT7g.js";import"./Accordion-CTUgpZ-B.js";import"./Alert-BcLBdkq5.js";import"./AlertIcon-Ccz2YQls.js";import"./AlertBadge-DzfN4yVX.js";import"./Align-CqoAJI6M.js";import"./Popover-BzzsvlUu.js";import"./OverlayTrigger-CQXiz3lB.js";import"./TableFooterRow-BlQ2sKAu.js";import"./SkeletonText-EnN-tyvd.js";import"./Avatar-BoT--Swq.js";import"./AvatarStack-D7dF8Abq.js";import"./Badge-BODqGCzs.js";import"./BigNumber-CaOlSiXS.js";import"./Breadcrumb-kRVQ0P47.js";import"./Link-Cz7JnS5t.js";import"./Heading-DEtNPCJN.js";import"./Legend-Cg9gjTEr.js";import"./FileCardList-CvtUHugH.js";import"./Image-C1Z_Jrqw.js";import"./Color-QRfHlKIC.js";import"./Content-B7myGA-g.js";import"./ContextualHelpTrigger-DvoCzQUP.js";import"./CounterBadge-i2riKAFy.js";import"./DonutChart-B74BzGpv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-_D41FmY-.js";import"./Header-DRQSlscy.js";import"./Initials-BLqXYT9A.js";import"./InlineCode-DpgdCcoV.js";import"./PopoverTrigger-BZs4Q1Hp.js";import"./Separator-Yorp4CJm.js";import"./Message-DM93Jn4g.js";import"./MessageSeparator--4DDPHgg.js";import"./NavigationGroup-k0vE3zib.js";import"./Notification-DFIYUGUC.js";import"./NotificationProvider-BYTR-0ZM.js";import"./ProgressBar-BO_vS1l4.js";import"./Rating-CikA--0V.js";import"./Skeleton-CRxBQiHe.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Hr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Kr as __namedExportsOrder,Hr as default};
