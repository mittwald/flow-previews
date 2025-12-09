import{j as r,r as x}from"./iframe-D29QVi29.js";import{b as a,u as l,F as d,t as j}from"./Form-NpVZHmv0.js";import{L as o}from"./Label-7gHNx5q_.js";import{R as c,S as f}from"./ResetButton-4cumsBRi.js";import{B as p}from"./Button-BqO8ZFSe.js";import{S as g,s as u}from"./Section-N6-W-jGX.js";import{A as b}from"./ActionGroup-DBGYrkNa.js";import{N as t,v as E,g as S}from"./TimeField-lp3G4cvL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BIIctUHv.js";import"./PropsContextProvider-Di3M49gZ.js";import"./mergeRefs-Dxk1BzaE.js";import"./index-CR8Graxx.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Bqmt488r.js";import"./context-qGV7OOPv.js";import"./browser-CsgOcZeL.js";import"./utils-V6v5WZV5.js";import"./ProgressBar-1j73270Z.js";import"./Hidden-DYWDaDdl.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-qRr2EWc4.js";import"./Text-BTGWwOlA.js";import"./EmulatedBoldText-C5bjRzZR.js";import"./LoadingSpinner-BK6n1zCV.js";import"./Button-x1GyynEX.js";import"./useFocusRing-BTna3mEs.js";import"./useFocusable-DTRRpH6w.js";import"./context-i3-N7LSR.js";import"./RSPContexts-7wLun1z_.js";import"./Collection-BnP1T9jt.js";import"./CollectionBuilder-DjTeQogG.js";import"./SelectionIndicator-T7jZrYkx.js";import"./Separator-CwRYG8QD.js";import"./useStatic-lipZmjhB.js";import"./Accordion-pcyhtlWY.js";import"./Alert-ktnaCpLp.js";import"./AlertIcon-kk-UzcPM.js";import"./AlertBadge-BD8zfIUZ.js";import"./Align-BtSVJIfv.js";import"./Popover-0dSAyS70.js";import"./OverlayTrigger-BRRbGelm.js";import"./TableFooterRow-CA8NF4Dq.js";import"./SkeletonText-DmNXdtlf.js";import"./Avatar-DdRZEOpi.js";import"./AvatarStack-ByHEeQa7.js";import"./Badge-CVEppqDk.js";import"./BigNumber-Bg1ofazi.js";import"./Breadcrumb-BF3l43g2.js";import"./Link-BjYhTK1P.js";import"./Heading-DViBSNIF.js";import"./Legend-9054_P7x.js";import"./FileCardList-o4UnmRGi.js";import"./Image-BxoMCQ1N.js";import"./Color-B_L_jSYT.js";import"./Content-4wsi0omc.js";import"./ContextualHelpTrigger-BZZdrkgN.js";import"./CounterBadge-B6vj9Dqf.js";import"./DonutChart-48XA97RY.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CFBYRPqa.js";import"./Header-5t7o3Hne.js";import"./Initials-C20rNA0F.js";import"./InlineCode-CkOTYzGC.js";import"./PopoverTrigger-lEvm5luT.js";import"./Separator-CUu_rnx_.js";import"./Message-CK6j6Y0e.js";import"./MessageSeparator-ZDTmypgR.js";import"./NavigationGroup-DpBlg96L.js";import"./Notification-CY5CezJs.js";import"./NotificationProvider-DYLCryBZ.js";import"./ProgressBar-DePOjU9y.js";import"./Rating-BloKNl8U.js";import"./Skeleton-CpVZIb00.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Hr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
