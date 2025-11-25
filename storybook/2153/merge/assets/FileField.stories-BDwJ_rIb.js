import{j as r,r as x}from"./iframe-BLnMNn74.js";import{b as l,u as a,F as c,t as j}from"./Form-D1UTqeWr.js";import{L as s}from"./Label-DsxxKAsc.js";import{R as p,S as d}from"./ResetButton-_Ssv2ALf.js";import{B as t}from"./Button-BheRlZ5y.js";import{S,s as u}from"./Section-C4IRs01H.js";import{A as b}from"./ActionGroup-D4qujtmo.js";import{s as m,F as B}from"./Modal-8XeHYI3F.js";import"./index-nuYtCEEu.js";import"./dynamic-lDfDlCad.js";import"./flowComponent-Cc_1rAUW.js";import"./index-D7hijKS_.js";import"./clsx-B-dksMZM.js";import"./index-BEG_ZaEs.js";import"./useLocalizedStringFormatter-B2X4EAgn.js";import"./context-DeTRhxa_.js";import"./browser-3pbWDgJF.js";import"./utils-mouUCLqv.js";import"./ProgressBar-CiddY3ze.js";import"./Hidden-DG1PJtoX.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DVYn3YAA.js";import"./Text-BLxKn04K.js";import"./EmulatedBoldText-Y_QL0NOh.js";import"./LoadingSpinner-CXYzRfKv.js";import"./Button-DcXCtAho.js";import"./useFocusRing-DSyHnBAC.js";import"./useFocusable-CD4hwFyS.js";import"./context-tC_fb_7Z.js";import"./RSPContexts-PYGgvhgu.js";import"./Collection-B9Zfgr-f.js";import"./CollectionBuilder-BNaZkMOR.js";import"./SelectionIndicator-B3Vil9K4.js";import"./Separator-CoYUerX-.js";import"./useStatic-C1gHOY5o.js";import"./FileCardList-C-nFF2lq.js";import"./Avatar-uSFzf8En.js";import"./AlertIcon-D_ZK5_qh.js";import"./Image-C3aTXuYo.js";import"./Link-BiwBBQmE.js";import"./ControlledNotification-CJ1U_sXf.js";import"./Flex-DEZ5_BjM.js";import"./Accordion-DYry0ver.js";import"./Alert-DpWN8tfH.js";import"./AlertBadge-DR63qZD8.js";import"./Align-DGThSHH9.js";import"./AvatarStack-C5tI56sp.js";import"./BigNumber-B8IdDyzZ.js";import"./Breadcrumb-QEC6aw0y.js";import"./Heading-D0fV1MUw.js";import"./Legend-DalDE9ec.js";import"./Color-CZRI8S1_.js";import"./TableFooterRow-DZByrFxu.js";import"./SkeletonText-CgnC14Qd.js";import"./Content-D01rsQck.js";import"./CounterBadge-DDvI3NyR.js";import"./DonutChart-CCUCxJB3.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-48_UokG_.js";import"./Header-Dvm5iR7H.js";import"./Initials-CGdYflvx.js";import"./InlineCode-5yLIxxaJ.js";import"./LayoutCard-BJitsBmJ.js";import"./Separator-B4qHJCoW.js";import"./MessageSeparator-BlU-rXLl.js";import"./NavigationGroup-BwV6U3dj.js";import"./Notification-BlXVrBim.js";import"./NotificationProvider-B_e8WRLe.js";import"./ProgressBar-CqlEDKCU.js";import"./Rating-CMJWfAMs.js";import"./Skeleton-Dhd804V2.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Gr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Hr as __namedExportsOrder,Gr as default};
