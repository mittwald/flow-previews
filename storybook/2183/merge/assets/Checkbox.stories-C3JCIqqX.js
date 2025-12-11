import{j as r,r as x}from"./iframe-Bo-CC4om.js";import{b as p,u as c,F as a,t as F}from"./Form-BUpNurWq.js";import{R as l,S as h}from"./ResetButton-CBw-4Fdn.js";import{B as d}from"./Button-DsbAYxy6.js";import{S as j,s as u}from"./Section-BSzb61PI.js";import{A as b}from"./ActionGroup-DmuV-_zy.js";import{s as t,g as E}from"./TimeField-C-GOyraa.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DI9mkNr1.js";import"./PropsContextProvider-JVmwHNwK.js";import"./mergeRefs-BCVLU5t5.js";import"./index-Cq4e0PeD.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-C8gMVCfn.js";import"./context-DUzMMmSG.js";import"./browser-CQUdwXOL.js";import"./utils-BE4vzmGc.js";import"./IconWarning-B7qIXHf5.js";import"./remote-B4cOsRJO.js";import"./Text-FWtYFqa_.js";import"./EmulatedBoldText-DaZX5sg6.js";import"./LoadingSpinner-U2Qf3euF.js";import"./Button-DEzwtm5X.js";import"./ProgressBar-1VAtpU2v.js";import"./Hidden-DO4405Os.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-ChCBtORy.js";import"./useFocusable-B-PGRSDZ.js";import"./context-Dp75aXTI.js";import"./RSPContexts-BIpJdst2.js";import"./Collection-D6MbkC5o.js";import"./CollectionBuilder-B0V3ZRNt.js";import"./SelectionIndicator-BLd_vFKr.js";import"./Separator-BoV_7H5z.js";import"./useStatic-CUzdYRpB.js";import"./Accordion-9Le9yhf_.js";import"./Alert-Dt_4j8QW.js";import"./AlertIcon-mGxxCUjy.js";import"./AlertBadge-BIsElKxu.js";import"./Align-2Rvfe-vL.js";import"./Popover-CuQlxumw.js";import"./OverlayTrigger-CdAPQ6Lz.js";import"./TableFooterRow-rYWUUYPE.js";import"./SkeletonText-Cawt_Liw.js";import"./Avatar-DZgOazPv.js";import"./AvatarStack-CK7V-CZy.js";import"./Badge-KHAUUQ1g.js";import"./BigNumber-BPcM1V5W.js";import"./Breadcrumb-BdPm70-C.js";import"./Link-Cjmbqaeu.js";import"./Heading-BHjCTnZi.js";import"./Legend-BJJJjizN.js";import"./FileCardList-Ns0-bzlM.js";import"./Image-DWyBIzwU.js";import"./Color-B9W2SphA.js";import"./Content-DkmAOWWJ.js";import"./Label-DRQE_3kZ.js";import"./ContextualHelpTrigger-qV88HZ0Q.js";import"./CounterBadge-DrxirSEd.js";import"./DonutChart-r4Ym1MHi.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DvV3W6_m.js";import"./Header-DX79Odlg.js";import"./Initials-c31qSACO.js";import"./InlineCode-WgY9VQ0d.js";import"./PopoverTrigger--EGMIntl.js";import"./Separator-Tuz6Qj0k.js";import"./Message-DwvTL-MT.js";import"./MessageSeparator-BmmOSADd.js";import"./NavigationGroup-BfArZJF_.js";import"./Notification-CxiWXGjP.js";import"./NotificationProvider-ev7yt2lS.js";import"./ProgressBar-Y54IGAK3.js";import"./Rating-D6chMOWs.js";import"./Skeleton-Bnf_ayGA.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,g=S("submit"),Mr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),g(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},i={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
