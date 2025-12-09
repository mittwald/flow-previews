import{j as r,r as x}from"./iframe-GdgkclWs.js";import{b as a,u as l,F as d,t as j}from"./Form-CAPGQYFw.js";import{L as o}from"./Label-ChEMpQPE.js";import{R as c,S as f}from"./ResetButton-CSKvvOZv.js";import{B as p}from"./Button-B0JEmBNK.js";import{S as g,s as u}from"./Section-VLscJ2rL.js";import{A as b}from"./ActionGroup-C82CNpK6.js";import{N as t,v as E,g as S}from"./TimeField-CVigSgag.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-PnYMfd4f.js";import"./PropsContextProvider-CVn6a-Br.js";import"./mergeRefs-CirupE_e.js";import"./index-BpewjHzz.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BYse3rRW.js";import"./context-G4rNg2r5.js";import"./browser-CClwHdx_.js";import"./utils-DoU55v00.js";import"./ProgressBar-BByvzxb3.js";import"./Hidden-DfAtz4Rp.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CGOSGhfQ.js";import"./Text-Cto25n51.js";import"./EmulatedBoldText-Ddlneh35.js";import"./LoadingSpinner-ChMWC-CB.js";import"./Button-9ssRHwLo.js";import"./useFocusRing-FWhz3ffE.js";import"./useFocusable-CGBhab3M.js";import"./context-C_Ye8hEJ.js";import"./RSPContexts-Ih3Q_XqN.js";import"./Collection-DiuPOFRO.js";import"./CollectionBuilder-D0v6CoH5.js";import"./SelectionIndicator-CLOzYwLf.js";import"./Separator-DBBWSXz5.js";import"./useStatic-CV3hAC_1.js";import"./Accordion-CIHbFerH.js";import"./Alert-Ghfdqzqq.js";import"./AlertIcon-BHK-Daud.js";import"./AlertBadge-B0j6vp5K.js";import"./Align-D7FVyJEv.js";import"./Popover-DCEEmw0P.js";import"./OverlayTrigger-FDfyad1h.js";import"./TableFooterRow-DkhcovOF.js";import"./SkeletonText-BC3QvNYs.js";import"./Avatar-BdEExudS.js";import"./AvatarStack-D83q2IaA.js";import"./Badge-CULYHS4O.js";import"./BigNumber-CQ1o5YVg.js";import"./Breadcrumb-Bmgceg6h.js";import"./Link-D6Y7USyN.js";import"./Heading-C8_gRcPp.js";import"./Legend-814CjWqc.js";import"./FileCardList-u01e7SGm.js";import"./Image-DvuZYehV.js";import"./Color-C5h7DqqR.js";import"./Content-JCMb0S3J.js";import"./ContextualHelpTrigger-xDG4yDFQ.js";import"./CounterBadge-gaV0X7ON.js";import"./DonutChart-DGD5BRbv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Dt1P96u5.js";import"./Header-Dg8MvpqU.js";import"./Initials-5h9DQSHl.js";import"./InlineCode-B9Q3OiFc.js";import"./PopoverTrigger-BDzk5u7s.js";import"./Separator-i6qBYsms.js";import"./Message-CeGAy6Zn.js";import"./MessageSeparator-CRScGEmn.js";import"./NavigationGroup-CdsshAOA.js";import"./Notification-B5P2NapB.js";import"./NotificationProvider-DTKoqy3M.js";import"./ProgressBar-8ZDZDqcE.js";import"./Rating-BSkiv03r.js";import"./Skeleton-CcRzeFAV.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Hr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
