import{j as r,r as F}from"./iframe-CfnfnCWP.js";import{c as p,u as c,F as d,t as x}from"./Form-CWAUqMaj.js";import{L as o}from"./Label-bL_gCZh0.js";import"./ResetButton-Bd1JFkc-.js";import{B as s}from"./Button-CV55_Sir.js";import{S as u,s as l}from"./Section-DyWVtxP8.js";import{A as g}from"./ActionGroup-ptJvXf99.js";import{as as e,F as j}from"./Modal-Bik1OpTp.js";import"./index-nuYtCEEu.js";import"./dynamic-DF8Fk99D.js";import"./flowComponent-xOoEmQCP.js";import"./index-DN1a3rz5.js";import"./clsx-B-dksMZM.js";import"./index-jLgmF_bk.js";import"./useLocalizedStringFormatter-D2w38onZ.js";import"./context-Bzg-jxuH.js";import"./browser-Ch5bUTc0.js";import"./utils-DU1zOm8r.js";import"./ProgressBar-Cfyrz_Cf.js";import"./Hidden-DRFptqS-.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-C231uJAl.js";import"./Text-C5_UpO0B.js";import"./EmulatedBoldText-CoueItQ2.js";import"./LoadingSpinner-CcrjywYD.js";import"./Button-1Vt4wf41.js";import"./useFocusRing-jGhrx0Q1.js";import"./useFocusable-CIcRcjGf.js";import"./context-SSfCyC2q.js";import"./RSPContexts-D_4T2k7b.js";import"./Collection-CKHx5VpA.js";import"./CollectionBuilder-CzF4vvEU.js";import"./SelectionIndicator-CeTQtzYy.js";import"./Separator-Dc1fTfOS.js";import"./useStatic-tVkquGmk.js";import"./getActionGroupSlot-BW2T13eN.js";import"./FileCardList-BnI72QuC.js";import"./Avatar-BKCKuEoN.js";import"./AlertIcon-CjvlmAGq.js";import"./Image-B7xXTfv1.js";import"./Link-1qGklXs3.js";import"./ControlledNotification-CWDmevtd.js";import"./LayoutCard-leUa_8CQ.js";import"./Accordion-BY6-ouH-.js";import"./Alert-CMM8UOVE.js";import"./AlertBadge-DPcqJ-fR.js";import"./Align-BlaWghgk.js";import"./AvatarStack-DHsLYloj.js";import"./BigNumber-CStkPgHw.js";import"./Breadcrumb-BgIohuPw.js";import"./Heading-OB0ZBXrr.js";import"./Legend-C4_L9Y3A.js";import"./Color-BOS3g2Xf.js";import"./TableFooterRow-CoEvYc5I.js";import"./SkeletonText-O8BDJFpb.js";import"./Content-DUix3Zjx.js";import"./CounterBadge-OnbWpZxx.js";import"./DonutChart-Dz5CcphO.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DslqW-TM.js";import"./Header-D8RivKj8.js";import"./Initials-DkX37n9j.js";import"./InlineCode-W52tiGxP.js";import"./Separator-DigxSFZV.js";import"./MessageSeparator-D39RUA6I.js";import"./NavigationGroup-BqeXEG9A.js";import"./Notification-B_cV56tQ.js";import"./NotificationProvider-AKPPj8Tt.js";import"./ProgressBar-DxOLLNnY.js";import"./Skeleton-DQGH7RxM.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),Tr={title:"Integrations/React Hook Form/Rating",component:p,render:()=>{const t=async h=>{await l(1500),E(h)},f=c({defaultValues:{ratingDefaultValue:3}}),a=x();return r.jsx(d,{form:f,onSubmit:t,children:r.jsxs(u,{children:[r.jsx(a,{name:"rating",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(a,{name:"ratingDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(a,{name:"ratingRequired",rules:{required:"Please rate"},children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(g,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},i={},n={render:()=>{const t=c();return F.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(d,{form:t,onSubmit:async()=>await l(2e3),children:r.jsxs(u,{children:[r.jsx(p,{name:"field",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsxs(e,{isInvalid:!0,children:[r.jsx(o,{children:"Rating"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})})}},m={render:()=>{const t=c();return r.jsxs(d,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Section>
          <Field name="field">
            <Rating>
              <Label>Rating</Label>
            </Rating>
          </Field>
          <Rating isInvalid>
            <Label>Rating</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </Rating>
        </Section>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <Rating>
            <Label>Rating</Label>
          </Rating>
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{i as Default,n as WithFieldError,m as WithFocus,kr as __namedExportsOrder,Tr as default};
