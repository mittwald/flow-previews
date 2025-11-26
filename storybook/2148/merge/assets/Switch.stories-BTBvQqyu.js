import{j as r,r as F}from"./iframe-B_xU1nn7.js";import{b as n,u as p,F as a,t as S}from"./Form-DAeUcz-J.js";import{R as u,S as l}from"./ResetButton-BujJeb6f.js";import{B as d}from"./Button-CJjTOiYK.js";import{S as x,s as c}from"./Section-aN2a1IPE.js";import{A as E}from"./ActionGroup-BIwOZff1.js";import{S as s,g as j}from"./TimeField-DAIEB6Mx.js";import"./index-nuYtCEEu.js";import"./dynamic-DkcCZ1Pm.js";import"./PropsContextProvider-Cqc_GEqv.js";import"./mergeRefs-DDgKR_H-.js";import"./index-BJJzNH44.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BxIEt52a.js";import"./context-DGbiAMEx.js";import"./browser-B5ILUykA.js";import"./utils-DWRw1wg7.js";import"./IconWarning-BbWnQxtz.js";import"./Text-IdcKzQUN.js";import"./EmulatedBoldText-BzzsilYU.js";import"./LoadingSpinner-D6qMiqks.js";import"./Button-C_B3ah-f.js";import"./ProgressBar-1v-zrZjX.js";import"./Hidden-AstmD5FI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B-eR60lx.js";import"./useFocusable-Ddd5SUsS.js";import"./context-CNJB9XcB.js";import"./RSPContexts-CkMxE85k.js";import"./Collection-SdZ6Sup7.js";import"./CollectionBuilder-CL7Y9BKh.js";import"./SelectionIndicator-DZ8T-aZ-.js";import"./Separator-D6B_DVDR.js";import"./useStatic-DEsZhXHA.js";import"./Accordion-B-nnSuLg.js";import"./Alert-XE653P4e.js";import"./AlertIcon-DBKF5K6s.js";import"./AlertBadge-DBA4NYlx.js";import"./Align-CR6J15sP.js";import"./Popover-f3I7stco.js";import"./OverlayTrigger-DCVkiacf.js";import"./TableFooterRow-C5siyAmN.js";import"./SkeletonText-Cetdbyan.js";import"./Avatar-BzK22LxN.js";import"./AvatarStack-BnAvP6O1.js";import"./Badge-Tnmd4leD.js";import"./BigNumber-D-zAlzRm.js";import"./Breadcrumb-C6H4OLtJ.js";import"./Link-hOwnT9DM.js";import"./Heading-B_4jd62B.js";import"./Legend-Kau7Ns-4.js";import"./FileCardList-Bbwcsc6X.js";import"./Image-DAesSSML.js";import"./Color-CdDRB0UO.js";import"./Content-BAHraf_V.js";import"./Label-z6gInSF0.js";import"./ContextualHelpTrigger-CYt3J7rd.js";import"./CounterBadge-CSSR6Q3s.js";import"./DonutChart-YSL2XDiM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D98EXX3l.js";import"./Header-CnyOwhZl.js";import"./Initials-6ZzTyiuj.js";import"./InlineCode-aXE1rdVe.js";import"./PopoverTrigger-DGqbki2P.js";import"./Separator--zbsA2fy.js";import"./Message-DSf1Tyid.js";import"./MessageSeparator-C5oRnvo_.js";import"./NavigationGroup-DpAuqwQ9.js";import"./Notification-CbEe_kr1.js";import"./NotificationProvider-B2l9Eoa8.js";import"./ProgressBar-CFs3xVsw.js";import"./Rating-hR635hxg.js";import"./Skeleton-DsuDYoQm.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Mr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),g(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
