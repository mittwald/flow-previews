import{j as r,r as x}from"./iframe-B_xU1nn7.js";import{b as l,u as a,F as c,t as j}from"./Form-DAeUcz-J.js";import{L as s}from"./Label-z6gInSF0.js";import{R as u,S as d}from"./ResetButton-BujJeb6f.js";import{B as t}from"./Button-CJjTOiYK.js";import{S,s as p}from"./Section-aN2a1IPE.js";import{A as b}from"./ActionGroup-BIwOZff1.js";import{q as m,g as B}from"./TimeField-DAIEB6Mx.js";import"./index-nuYtCEEu.js";import"./dynamic-DkcCZ1Pm.js";import"./PropsContextProvider-Cqc_GEqv.js";import"./mergeRefs-DDgKR_H-.js";import"./index-BJJzNH44.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BxIEt52a.js";import"./context-DGbiAMEx.js";import"./browser-B5ILUykA.js";import"./utils-DWRw1wg7.js";import"./ProgressBar-1v-zrZjX.js";import"./Hidden-AstmD5FI.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BbWnQxtz.js";import"./Text-IdcKzQUN.js";import"./EmulatedBoldText-BzzsilYU.js";import"./LoadingSpinner-D6qMiqks.js";import"./Button-C_B3ah-f.js";import"./useFocusRing-B-eR60lx.js";import"./useFocusable-Ddd5SUsS.js";import"./context-CNJB9XcB.js";import"./RSPContexts-CkMxE85k.js";import"./Collection-SdZ6Sup7.js";import"./CollectionBuilder-CL7Y9BKh.js";import"./SelectionIndicator-DZ8T-aZ-.js";import"./Separator-D6B_DVDR.js";import"./useStatic-DEsZhXHA.js";import"./Accordion-B-nnSuLg.js";import"./Alert-XE653P4e.js";import"./AlertIcon-DBKF5K6s.js";import"./AlertBadge-DBA4NYlx.js";import"./Align-CR6J15sP.js";import"./Popover-f3I7stco.js";import"./OverlayTrigger-DCVkiacf.js";import"./TableFooterRow-C5siyAmN.js";import"./SkeletonText-Cetdbyan.js";import"./Avatar-BzK22LxN.js";import"./AvatarStack-BnAvP6O1.js";import"./Badge-Tnmd4leD.js";import"./BigNumber-D-zAlzRm.js";import"./Breadcrumb-C6H4OLtJ.js";import"./Link-hOwnT9DM.js";import"./Heading-B_4jd62B.js";import"./Legend-Kau7Ns-4.js";import"./FileCardList-Bbwcsc6X.js";import"./Image-DAesSSML.js";import"./Color-CdDRB0UO.js";import"./Content-BAHraf_V.js";import"./ContextualHelpTrigger-CYt3J7rd.js";import"./CounterBadge-CSSR6Q3s.js";import"./DonutChart-YSL2XDiM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D98EXX3l.js";import"./Header-CnyOwhZl.js";import"./Initials-6ZzTyiuj.js";import"./InlineCode-aXE1rdVe.js";import"./PopoverTrigger-DGqbki2P.js";import"./Separator--zbsA2fy.js";import"./Message-DSf1Tyid.js";import"./MessageSeparator-C5oRnvo_.js";import"./NavigationGroup-DpAuqwQ9.js";import"./Notification-CbEe_kr1.js";import"./NotificationProvider-B2l9Eoa8.js";import"./ProgressBar-CFs3xVsw.js";import"./Rating-hR635hxg.js";import"./Skeleton-DsuDYoQm.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Mr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await p(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Nr as __namedExportsOrder,Mr as default};
