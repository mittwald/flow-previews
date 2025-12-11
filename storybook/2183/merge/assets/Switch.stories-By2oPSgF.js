import{j as r,r as F}from"./iframe-Bo-CC4om.js";import{b as n,u as p,F as a,t as S}from"./Form-BUpNurWq.js";import{R as u,S as l}from"./ResetButton-CBw-4Fdn.js";import{B as d}from"./Button-DsbAYxy6.js";import{S as x,s as c}from"./Section-BSzb61PI.js";import{A as E}from"./ActionGroup-DmuV-_zy.js";import{S as s,g as j}from"./TimeField-C-GOyraa.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DI9mkNr1.js";import"./PropsContextProvider-JVmwHNwK.js";import"./mergeRefs-BCVLU5t5.js";import"./index-Cq4e0PeD.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-C8gMVCfn.js";import"./context-DUzMMmSG.js";import"./browser-CQUdwXOL.js";import"./utils-BE4vzmGc.js";import"./IconWarning-B7qIXHf5.js";import"./remote-B4cOsRJO.js";import"./Text-FWtYFqa_.js";import"./EmulatedBoldText-DaZX5sg6.js";import"./LoadingSpinner-U2Qf3euF.js";import"./Button-DEzwtm5X.js";import"./ProgressBar-1VAtpU2v.js";import"./Hidden-DO4405Os.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-ChCBtORy.js";import"./useFocusable-B-PGRSDZ.js";import"./context-Dp75aXTI.js";import"./RSPContexts-BIpJdst2.js";import"./Collection-D6MbkC5o.js";import"./CollectionBuilder-B0V3ZRNt.js";import"./SelectionIndicator-BLd_vFKr.js";import"./Separator-BoV_7H5z.js";import"./useStatic-CUzdYRpB.js";import"./Accordion-9Le9yhf_.js";import"./Alert-Dt_4j8QW.js";import"./AlertIcon-mGxxCUjy.js";import"./AlertBadge-BIsElKxu.js";import"./Align-2Rvfe-vL.js";import"./Popover-CuQlxumw.js";import"./OverlayTrigger-CdAPQ6Lz.js";import"./TableFooterRow-rYWUUYPE.js";import"./SkeletonText-Cawt_Liw.js";import"./Avatar-DZgOazPv.js";import"./AvatarStack-CK7V-CZy.js";import"./Badge-KHAUUQ1g.js";import"./BigNumber-BPcM1V5W.js";import"./Breadcrumb-BdPm70-C.js";import"./Link-Cjmbqaeu.js";import"./Heading-BHjCTnZi.js";import"./Legend-BJJJjizN.js";import"./FileCardList-Ns0-bzlM.js";import"./Image-DWyBIzwU.js";import"./Color-B9W2SphA.js";import"./Content-DkmAOWWJ.js";import"./Label-DRQE_3kZ.js";import"./ContextualHelpTrigger-qV88HZ0Q.js";import"./CounterBadge-DrxirSEd.js";import"./DonutChart-r4Ym1MHi.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DvV3W6_m.js";import"./Header-DX79Odlg.js";import"./Initials-c31qSACO.js";import"./InlineCode-WgY9VQ0d.js";import"./PopoverTrigger--EGMIntl.js";import"./Separator-Tuz6Qj0k.js";import"./Message-DwvTL-MT.js";import"./MessageSeparator-BmmOSADd.js";import"./NavigationGroup-BfArZJF_.js";import"./Notification-CxiWXGjP.js";import"./NotificationProvider-ev7yt2lS.js";import"./ProgressBar-Y54IGAK3.js";import"./Rating-D6chMOWs.js";import"./Skeleton-Bnf_ayGA.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Nr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),g(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...m.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Ur as __namedExportsOrder,Nr as default};
