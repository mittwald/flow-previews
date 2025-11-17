import{j as r,r as j}from"./iframe-CfnfnCWP.js";import{c as a,u as d,F as c,t as b}from"./Form-CWAUqMaj.js";import{L as t}from"./Label-bL_gCZh0.js";import{R as f,S as h}from"./ResetButton-Bd1JFkc-.js";import{B as u}from"./Button-CV55_Sir.js";import{S as E,s as l}from"./Section-DyWVtxP8.js";import{A as S}from"./ActionGroup-ptJvXf99.js";import{H as p,G as o,$ as D,I as B,F as g}from"./Modal-Bik1OpTp.js";import"./index-nuYtCEEu.js";import"./dynamic-DF8Fk99D.js";import"./flowComponent-xOoEmQCP.js";import"./index-DN1a3rz5.js";import"./clsx-B-dksMZM.js";import"./index-jLgmF_bk.js";import"./useLocalizedStringFormatter-D2w38onZ.js";import"./context-Bzg-jxuH.js";import"./browser-Ch5bUTc0.js";import"./utils-DU1zOm8r.js";import"./ProgressBar-Cfyrz_Cf.js";import"./Hidden-DRFptqS-.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-C231uJAl.js";import"./Text-C5_UpO0B.js";import"./EmulatedBoldText-CoueItQ2.js";import"./LoadingSpinner-CcrjywYD.js";import"./Button-1Vt4wf41.js";import"./useFocusRing-jGhrx0Q1.js";import"./useFocusable-CIcRcjGf.js";import"./context-SSfCyC2q.js";import"./RSPContexts-D_4T2k7b.js";import"./Collection-CKHx5VpA.js";import"./CollectionBuilder-CzF4vvEU.js";import"./SelectionIndicator-CeTQtzYy.js";import"./Separator-Dc1fTfOS.js";import"./useStatic-tVkquGmk.js";import"./getActionGroupSlot-BW2T13eN.js";import"./FileCardList-BnI72QuC.js";import"./Avatar-BKCKuEoN.js";import"./AlertIcon-CjvlmAGq.js";import"./Image-B7xXTfv1.js";import"./Link-1qGklXs3.js";import"./ControlledNotification-CWDmevtd.js";import"./LayoutCard-leUa_8CQ.js";import"./Accordion-BY6-ouH-.js";import"./Alert-CMM8UOVE.js";import"./AlertBadge-DPcqJ-fR.js";import"./Align-BlaWghgk.js";import"./AvatarStack-DHsLYloj.js";import"./BigNumber-CStkPgHw.js";import"./Breadcrumb-BgIohuPw.js";import"./Heading-OB0ZBXrr.js";import"./Legend-C4_L9Y3A.js";import"./Color-BOS3g2Xf.js";import"./TableFooterRow-CoEvYc5I.js";import"./SkeletonText-O8BDJFpb.js";import"./Content-DUix3Zjx.js";import"./CounterBadge-OnbWpZxx.js";import"./DonutChart-Dz5CcphO.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DslqW-TM.js";import"./Header-D8RivKj8.js";import"./Initials-DkX37n9j.js";import"./InlineCode-W52tiGxP.js";import"./Separator-DigxSFZV.js";import"./MessageSeparator-D39RUA6I.js";import"./NavigationGroup-BqeXEG9A.js";import"./Notification-B_cV56tQ.js";import"./NotificationProvider-AKPPj8Tt.js";import"./ProgressBar-DxOLLNnY.js";import"./Skeleton-DQGH7RxM.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Mr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await l(1500),y(F)},x=d({defaultValues:{dateDefaultValue:p("2025-09-01")}}),i=b();return r.jsx(c,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:p("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:p("2025-09-01")}});return r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Cr as __namedExportsOrder,Mr as default};
