import{j as r,r as x}from"./iframe-pZiTyeCe.js";import{s as a,u as l,F as d,Q as j,N as o,x as g,aA as c,aB as f,z as b}from"./Modal-BNWk3nM6.js";import{L as t}from"./Label-Bq8cCkbx.js";import{B as p}from"./Button-C3Yaasdf.js";import{S as E,s as u}from"./Section-DMGyew6W.js";import{A as S}from"./ActionGroup-B37LObZH.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-kx5B2hFn.js";import"./flowComponent-RbA6ktt2.js";import"./index-CECtKB63.js";import"./index-5w2LD9ey.js";import"./context-CQ20wrAw.js";import"./Button-oVsIJRaP.js";import"./utils-DLNdnmti.js";import"./ProgressBar-DUC-K2Ya.js";import"./Hidden-B2yPOVbh.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CZnL3ok6.js";import"./useFocusRing-C0k47PYu.js";import"./useFocusable-BUWes4as.js";import"./RSPContexts-U_yzxMR5.js";import"./Collection-aJCyzdhX.js";import"./CollectionBuilder-CcVz4A8R.js";import"./SelectionIndicator-6fhscOQO.js";import"./Separator-YouxGU0I.js";import"./browser-BsEa2SY6.js";import"./useLocalizedStringFormatter-D7qk7Uno.js";import"./useStatic-CgWkj8lf.js";import"./FileCardList-CvkPGy21.js";import"./IconWarning-DP7Cql9d.js";import"./Avatar-28QHBiJA.js";import"./AlertIcon-BgFDbno9.js";import"./Image-BDSNKL5x.js";import"./Text-BJ5OGBwu.js";import"./EmulatedBoldText-DxtYD21w.js";import"./Link-DwSr3nzc.js";import"./ControlledNotification-DOsia725.js";import"./LoadingSpinner-CtehKW-p.js";import"./LayoutCard-BwA4FEKt.js";import"./Accordion-Dl5VlGwV.js";import"./Alert-Cy4CnGLM.js";import"./AlertBadge-CVrWVY-b.js";import"./Align-r0lwyQhH.js";import"./AvatarStack-Cbu4yl0s.js";import"./BigNumber-mDDEeEsg.js";import"./Breadcrumb-CDViVy_M.js";import"./Heading-Bf30zfAP.js";import"./Legend-CwSdijCm.js";import"./Color-DvAn_R7b.js";import"./TableFooterRow-CzICUB9D.js";import"./SkeletonText-C-ydvLZR.js";import"./Content-gnlwq7We.js";import"./CounterBadge-CSRpIA9_.js";import"./DonutChart-BLGzoFBa.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-f1piE0b5.js";import"./Header-DeQ2PPHG.js";import"./Initials-BCJAZPXj.js";import"./InlineCode-DyEQE0gj.js";import"./Separator-D1pVlz0K.js";import"./MessageSeparator-CK-bXqSq.js";import"./NavigationGroup-Bi7YdcqL.js";import"./Notification-DG8G0-jK.js";import"./NotificationProvider-BbthnAYF.js";import"./ProgressBar-C2sbZ2Wx.js";import"./Rating-ADLOBIR8.js";import"./Skeleton-DKhYDlyl.js";import"./getActionGroupSlot-0C1vq_w_.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Tr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),y(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"age",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(o,{minValue:18,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"You have to be at least 18 years old"})]})}),r.jsxs(S,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Yr as __namedExportsOrder,Tr as default};
