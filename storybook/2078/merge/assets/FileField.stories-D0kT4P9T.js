import{j as r,r as x}from"./iframe-CfnfnCWP.js";import{c as l,u as a,F as c,t as j}from"./Form-CWAUqMaj.js";import{L as s}from"./Label-bL_gCZh0.js";import{R as d,S as p}from"./ResetButton-Bd1JFkc-.js";import{B as t}from"./Button-CV55_Sir.js";import{S,s as u}from"./Section-DyWVtxP8.js";import{A as b}from"./ActionGroup-ptJvXf99.js";import{s as m,F as B}from"./Modal-Bik1OpTp.js";import"./index-nuYtCEEu.js";import"./dynamic-DF8Fk99D.js";import"./flowComponent-xOoEmQCP.js";import"./index-DN1a3rz5.js";import"./clsx-B-dksMZM.js";import"./index-jLgmF_bk.js";import"./useLocalizedStringFormatter-D2w38onZ.js";import"./context-Bzg-jxuH.js";import"./browser-Ch5bUTc0.js";import"./utils-DU1zOm8r.js";import"./ProgressBar-Cfyrz_Cf.js";import"./Hidden-DRFptqS-.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-C231uJAl.js";import"./Text-C5_UpO0B.js";import"./EmulatedBoldText-CoueItQ2.js";import"./LoadingSpinner-CcrjywYD.js";import"./Button-1Vt4wf41.js";import"./useFocusRing-jGhrx0Q1.js";import"./useFocusable-CIcRcjGf.js";import"./context-SSfCyC2q.js";import"./RSPContexts-D_4T2k7b.js";import"./Collection-CKHx5VpA.js";import"./CollectionBuilder-CzF4vvEU.js";import"./SelectionIndicator-CeTQtzYy.js";import"./Separator-Dc1fTfOS.js";import"./useStatic-tVkquGmk.js";import"./getActionGroupSlot-BW2T13eN.js";import"./FileCardList-BnI72QuC.js";import"./Avatar-BKCKuEoN.js";import"./AlertIcon-CjvlmAGq.js";import"./Image-B7xXTfv1.js";import"./Link-1qGklXs3.js";import"./ControlledNotification-CWDmevtd.js";import"./LayoutCard-leUa_8CQ.js";import"./Accordion-BY6-ouH-.js";import"./Alert-CMM8UOVE.js";import"./AlertBadge-DPcqJ-fR.js";import"./Align-BlaWghgk.js";import"./AvatarStack-DHsLYloj.js";import"./BigNumber-CStkPgHw.js";import"./Breadcrumb-BgIohuPw.js";import"./Heading-OB0ZBXrr.js";import"./Legend-C4_L9Y3A.js";import"./Color-BOS3g2Xf.js";import"./TableFooterRow-CoEvYc5I.js";import"./SkeletonText-O8BDJFpb.js";import"./Content-DUix3Zjx.js";import"./CounterBadge-OnbWpZxx.js";import"./DonutChart-Dz5CcphO.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DslqW-TM.js";import"./Header-D8RivKj8.js";import"./Initials-DkX37n9j.js";import"./InlineCode-W52tiGxP.js";import"./Separator-DigxSFZV.js";import"./MessageSeparator-D39RUA6I.js";import"./NavigationGroup-BqeXEG9A.js";import"./Notification-B_cV56tQ.js";import"./NotificationProvider-AKPPj8Tt.js";import"./ProgressBar-DxOLLNnY.js";import"./Skeleton-DQGH7RxM.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),kr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Gr as __namedExportsOrder,kr as default};
