import{j as r,r as F}from"./iframe-Cir6MTA5.js";import{b as n,u as p,F as a,t as S}from"./Form-DKkjhGjg.js";import{R as u,S as l}from"./ResetButton-DDMtMKHg.js";import{B as d}from"./Button-C2A0kxO-.js";import{S as x,s as c}from"./Section-CsBFEvqK.js";import{A as E}from"./ActionGroup-CQUlrc02.js";import{S as s,g as j}from"./TimeField-C03E55-6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C54c6iDK.js";import"./PropsContextProvider-Cm8oeilI.js";import"./mergeRefs-B7VAW6Py.js";import"./index-Ib6Soh3C.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BNOIxokj.js";import"./context-DCFpjcCd.js";import"./browser-DYyRc_is.js";import"./utils-D3-KZmBM.js";import"./IconWarning-DBAWKFVr.js";import"./Text-NWoOtLYD.js";import"./EmulatedBoldText-CMuEkZzQ.js";import"./LoadingSpinner-Cbn--oub.js";import"./Button-CVO9gXsi.js";import"./ProgressBar-DkofuhmP.js";import"./Hidden-B8OXM-sx.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BaJuMT9x.js";import"./useFocusable-DuTyQoFg.js";import"./context-uB_U-Ll-.js";import"./RSPContexts-DBL9OuDo.js";import"./Collection-DXpzkPD8.js";import"./CollectionBuilder-Dzx_KF2Z.js";import"./SelectionIndicator-C9EgnhSM.js";import"./Separator-DJLduqtA.js";import"./useStatic-lrFYKeJo.js";import"./Accordion--LccsWdU.js";import"./Alert-Cwf4c51S.js";import"./AlertIcon-THsOUfa2.js";import"./AlertBadge-DQEistgl.js";import"./Align-CbiGC6Hm.js";import"./Popover-BnMf836y.js";import"./OverlayTrigger-D8wWf3qw.js";import"./TableFooterRow-Bn7VMJfM.js";import"./SkeletonText-BA7fTM6y.js";import"./Avatar-D1LE7OHQ.js";import"./AvatarStack-BjHAHFtd.js";import"./Badge-Dhmh7ReA.js";import"./BigNumber-Bdldp5Vs.js";import"./Breadcrumb-BgYb3jvA.js";import"./Link-DL2nVgdW.js";import"./Heading-C81Sjkat.js";import"./Legend-DNzEDg1V.js";import"./FileCardList-CdiBIUzb.js";import"./Image-Bmzle01D.js";import"./Color-DwuvilaM.js";import"./Content-sj2198_-.js";import"./Label-CD63mnMj.js";import"./ContextualHelpTrigger-Sr6lf3NJ.js";import"./CounterBadge-Blil8ag9.js";import"./DonutChart-CdK4877Z.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BjZ4vO5b.js";import"./Header-BqKpe2dR.js";import"./Initials-DaUoDTnU.js";import"./InlineCode-BDWrnhvQ.js";import"./PopoverTrigger-BDtzPLEN.js";import"./Separator-DYtvdLSf.js";import"./Message-BEPzM24B.js";import"./MessageSeparator-DCUCvEOC.js";import"./NavigationGroup-BZDK6UKv.js";import"./Notification-CZZ3xhm4.js";import"./NotificationProvider-DrRbbE28.js";import"./ProgressBar-DTjakmLk.js";import"./Rating-C6rR6C1R.js";import"./Skeleton-By5OXPEA.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Mr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),g(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Nr as __namedExportsOrder,Mr as default};
