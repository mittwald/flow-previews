import{j as r,r as S}from"./iframe-pZiTyeCe.js";import{s as n,u as a,F as p,Q as x,e as s,aA as u,aB as l,z as j}from"./Modal-BNWk3nM6.js";import{L as m}from"./Label-Bq8cCkbx.js";import{B as d}from"./Button-C3Yaasdf.js";import{S as b,s as c}from"./Section-DMGyew6W.js";import{A as E}from"./ActionGroup-B37LObZH.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-kx5B2hFn.js";import"./flowComponent-RbA6ktt2.js";import"./index-CECtKB63.js";import"./index-5w2LD9ey.js";import"./context-CQ20wrAw.js";import"./Button-oVsIJRaP.js";import"./utils-DLNdnmti.js";import"./ProgressBar-DUC-K2Ya.js";import"./Hidden-B2yPOVbh.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CZnL3ok6.js";import"./useFocusRing-C0k47PYu.js";import"./useFocusable-BUWes4as.js";import"./RSPContexts-U_yzxMR5.js";import"./Collection-aJCyzdhX.js";import"./CollectionBuilder-CcVz4A8R.js";import"./SelectionIndicator-6fhscOQO.js";import"./Separator-YouxGU0I.js";import"./browser-BsEa2SY6.js";import"./useLocalizedStringFormatter-D7qk7Uno.js";import"./useStatic-CgWkj8lf.js";import"./FileCardList-CvkPGy21.js";import"./IconWarning-DP7Cql9d.js";import"./Avatar-28QHBiJA.js";import"./AlertIcon-BgFDbno9.js";import"./Image-BDSNKL5x.js";import"./Text-BJ5OGBwu.js";import"./EmulatedBoldText-DxtYD21w.js";import"./Link-DwSr3nzc.js";import"./ControlledNotification-DOsia725.js";import"./LoadingSpinner-CtehKW-p.js";import"./LayoutCard-BwA4FEKt.js";import"./Accordion-Dl5VlGwV.js";import"./Alert-Cy4CnGLM.js";import"./AlertBadge-CVrWVY-b.js";import"./Align-r0lwyQhH.js";import"./AvatarStack-Cbu4yl0s.js";import"./BigNumber-mDDEeEsg.js";import"./Breadcrumb-CDViVy_M.js";import"./Heading-Bf30zfAP.js";import"./Legend-CwSdijCm.js";import"./Color-DvAn_R7b.js";import"./TableFooterRow-CzICUB9D.js";import"./SkeletonText-C-ydvLZR.js";import"./Content-gnlwq7We.js";import"./CounterBadge-CSRpIA9_.js";import"./DonutChart-BLGzoFBa.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-f1piE0b5.js";import"./Header-DeQ2PPHG.js";import"./Initials-BCJAZPXj.js";import"./InlineCode-DyEQE0gj.js";import"./Separator-D1pVlz0K.js";import"./MessageSeparator-CK-bXqSq.js";import"./NavigationGroup-Bi7YdcqL.js";import"./Notification-DG8G0-jK.js";import"./NotificationProvider-BbthnAYF.js";import"./ProgressBar-C2sbZ2Wx.js";import"./Rating-ADLOBIR8.js";import"./Skeleton-DKhYDlyl.js";import"./getActionGroupSlot-0C1vq_w_.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),zr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async f=>{await c(5e3),g(f)},h=a({defaultValues:{user:""}}),F=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(F,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Cr as __namedExportsOrder,zr as default};
