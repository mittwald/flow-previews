import{j as r,r as j}from"./iframe-B_xU1nn7.js";import{b as a,u as d,F as p,t as b}from"./Form-DAeUcz-J.js";import{L as t}from"./Label-z6gInSF0.js";import{R as f,S as h}from"./ResetButton-BujJeb6f.js";import{B as u}from"./Button-CJjTOiYK.js";import{S as E,s as c}from"./Section-aN2a1IPE.js";import{A as S}from"./ActionGroup-BIwOZff1.js";import{B as l,D as o,$ as D,E as B,g}from"./TimeField-DAIEB6Mx.js";import"./index-nuYtCEEu.js";import"./dynamic-DkcCZ1Pm.js";import"./PropsContextProvider-Cqc_GEqv.js";import"./mergeRefs-DDgKR_H-.js";import"./index-BJJzNH44.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BxIEt52a.js";import"./context-DGbiAMEx.js";import"./browser-B5ILUykA.js";import"./utils-DWRw1wg7.js";import"./ProgressBar-1v-zrZjX.js";import"./Hidden-AstmD5FI.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BbWnQxtz.js";import"./Text-IdcKzQUN.js";import"./EmulatedBoldText-BzzsilYU.js";import"./LoadingSpinner-D6qMiqks.js";import"./Button-C_B3ah-f.js";import"./useFocusRing-B-eR60lx.js";import"./useFocusable-Ddd5SUsS.js";import"./context-CNJB9XcB.js";import"./RSPContexts-CkMxE85k.js";import"./Collection-SdZ6Sup7.js";import"./CollectionBuilder-CL7Y9BKh.js";import"./SelectionIndicator-DZ8T-aZ-.js";import"./Separator-D6B_DVDR.js";import"./useStatic-DEsZhXHA.js";import"./Accordion-B-nnSuLg.js";import"./Alert-XE653P4e.js";import"./AlertIcon-DBKF5K6s.js";import"./AlertBadge-DBA4NYlx.js";import"./Align-CR6J15sP.js";import"./Popover-f3I7stco.js";import"./OverlayTrigger-DCVkiacf.js";import"./TableFooterRow-C5siyAmN.js";import"./SkeletonText-Cetdbyan.js";import"./Avatar-BzK22LxN.js";import"./AvatarStack-BnAvP6O1.js";import"./Badge-Tnmd4leD.js";import"./BigNumber-D-zAlzRm.js";import"./Breadcrumb-C6H4OLtJ.js";import"./Link-hOwnT9DM.js";import"./Heading-B_4jd62B.js";import"./Legend-Kau7Ns-4.js";import"./FileCardList-Bbwcsc6X.js";import"./Image-DAesSSML.js";import"./Color-CdDRB0UO.js";import"./Content-BAHraf_V.js";import"./ContextualHelpTrigger-CYt3J7rd.js";import"./CounterBadge-CSSR6Q3s.js";import"./DonutChart-YSL2XDiM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D98EXX3l.js";import"./Header-CnyOwhZl.js";import"./Initials-6ZzTyiuj.js";import"./InlineCode-aXE1rdVe.js";import"./PopoverTrigger-DGqbki2P.js";import"./Separator--zbsA2fy.js";import"./Message-DSf1Tyid.js";import"./MessageSeparator-C5oRnvo_.js";import"./NavigationGroup-DpAuqwQ9.js";import"./Notification-CbEe_kr1.js";import"./NotificationProvider-B2l9Eoa8.js";import"./ProgressBar-CFs3xVsw.js";import"./Rating-hR635hxg.js";import"./Skeleton-DsuDYoQm.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ur={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=d({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
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
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...m.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Yr as __namedExportsOrder,Ur as default};
