import{j as r,r as S}from"./iframe-BtRqkaoN.js";import{c as n,u as p,F as a,t as x}from"./Form-Bd9oEU0a.js";import{L as m}from"./Label-DEA5QNgM.js";import{R as u,S as l}from"./ResetButton-BBq4jeHf.js";import{B as d}from"./Button-BPlXfnB_.js";import{S as j,s as c}from"./Section-DxORUvzC.js";import{A as b}from"./ActionGroup-D0a1TuEY.js";import{e as s,F as E}from"./Modal-CDGfx8xL.js";import"./index-nuYtCEEu.js";import"./dynamic-s-bN7sg4.js";import"./flowComponent-lL_ayKQ8.js";import"./index-Bq7uci9y.js";import"./clsx-B-dksMZM.js";import"./index-m38LNed9.js";import"./useLocalizedStringFormatter-CW_rKmRX.js";import"./context-BjeDPPzV.js";import"./browser-BLYjcYaj.js";import"./utils-DZ-gBwlH.js";import"./ProgressBar-BPiJZ4Qy.js";import"./Hidden-DEfsXDrb.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DkmpBTGx.js";import"./Text-C82-Opvq.js";import"./EmulatedBoldText-DEqPiTPW.js";import"./LoadingSpinner-jhQv_W0v.js";import"./Button-DBAfHwZW.js";import"./useFocusRing-Cuw_RoAO.js";import"./useFocusable-Djt3CoWV.js";import"./context-BSa97aaI.js";import"./RSPContexts-Dy3XJREj.js";import"./Collection-BjDSumuQ.js";import"./CollectionBuilder-CvHEghsW.js";import"./SelectionIndicator-lBISxJoi.js";import"./Separator-B_m33Nu6.js";import"./useStatic-Cx2ReuRe.js";import"./FileCardList-DW1fCD53.js";import"./Avatar-CF69g3k0.js";import"./AlertIcon-CEzMYdZY.js";import"./Image-lNfhH4MA.js";import"./Link-DsBhuJ5I.js";import"./ControlledNotification-XJl_dB2W.js";import"./Flex-C6QDHQJ0.js";import"./Accordion-D844NWAq.js";import"./Alert-CkEZZy6i.js";import"./AlertBadge-D62r_RrJ.js";import"./Align-Ce3rIU_V.js";import"./AvatarStack-CYO7RyGK.js";import"./BigNumber-CsIC2_Nn.js";import"./Breadcrumb-h4t0mPs2.js";import"./Heading-Do1d9f-o.js";import"./Legend-BIz0nErH.js";import"./Color-BQLSKmwj.js";import"./TableFooterRow-B7bMzDHU.js";import"./SkeletonText-YNIzcCkm.js";import"./Content-CY14UYyB.js";import"./CounterBadge-CGv0vaW8.js";import"./DonutChart-BSRtiAXh.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D0PZlEH1.js";import"./Header-BRGfOg7r.js";import"./Initials-Dm2Il5IW.js";import"./InlineCode-CAALbjrA.js";import"./LayoutCard-BcMz8A0K.js";import"./Separator-QBAhEahF.js";import"./MessageSeparator-BfV-UWPl.js";import"./NavigationGroup-YJbzS_dd.js";import"./Notification-dUzHJ4Jf.js";import"./NotificationProvider-IMF5MrhA.js";import"./ProgressBar-BLfa9fLl.js";import"./Rating-BQYV4n93.js";import"./Skeleton-BHFnD8fZ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Hr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async f=>{await c(5e3),g(f)},h=p({defaultValues:{user:""}}),F=x();return r.jsx(a,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(F,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=p();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Kr as __namedExportsOrder,Hr as default};
