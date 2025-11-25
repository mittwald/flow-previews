import{j as r,r as x}from"./iframe-Dswl8YqW.js";import{c as l,u as a,F as c,t as j}from"./Form-DWj74Z7V.js";import{L as s}from"./Label-CMIuj4QW.js";import{R as p,S as d}from"./ResetButton-BalI_NXO.js";import{B as t}from"./Button-BlDvIS3Y.js";import{S,s as u}from"./Section-B6yNflVq.js";import{A as b}from"./ActionGroup-DkHaLZ1F.js";import{s as m,F as B}from"./Modal-CHITtey4.js";import"./index-nuYtCEEu.js";import"./dynamic-DeI_eRCJ.js";import"./flowComponent-DO1FM96o.js";import"./index-BTqTpX_p.js";import"./clsx-B-dksMZM.js";import"./index-DoB2isID.js";import"./useLocalizedStringFormatter-5OU1qxVX.js";import"./context-DC5A8m43.js";import"./browser-BqLtz9Zq.js";import"./utils-7BbO5OC0.js";import"./ProgressBar-DCPiQQ-S.js";import"./Hidden-BdIsYl6c.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Dt5PaZc0.js";import"./Text-CuuEScv1.js";import"./EmulatedBoldText-BY5a05VQ.js";import"./LoadingSpinner-B_hOay2Z.js";import"./Button-CdXhm7oQ.js";import"./useFocusRing-D1ZNAk-m.js";import"./useFocusable-0yY0J0Je.js";import"./context-BYCR6GGl.js";import"./RSPContexts-CB74f7ZL.js";import"./Collection-B4F75Snj.js";import"./CollectionBuilder-DGx6CCpB.js";import"./SelectionIndicator-Dtzr_iAT.js";import"./Separator-Cr7pfpci.js";import"./useStatic-DgEZfjHg.js";import"./FileCardList-C3qXU2FS.js";import"./Avatar-BvulIpzL.js";import"./AlertIcon-BGEjgne8.js";import"./Image-CfXDNzs_.js";import"./Link-2_MM-8En.js";import"./ControlledNotification-Cdu3NdkW.js";import"./Flex-gFiBBQt8.js";import"./Accordion-CBu_vh4u.js";import"./Alert-CNX0ngss.js";import"./AlertBadge-B2_vNTeY.js";import"./Align-BEZzEcxr.js";import"./AvatarStack-3d66Tqwb.js";import"./BigNumber-BpLWNUn0.js";import"./Breadcrumb-CnsXUeFp.js";import"./Heading-iCy8jlSp.js";import"./Legend-B16hb8ja.js";import"./Color-DDNTz8fh.js";import"./TableFooterRow-yZ5uWtqT.js";import"./SkeletonText-BgIZOvmp.js";import"./Content-Bv_VrsCP.js";import"./CounterBadge-DDPT3yFh.js";import"./DonutChart-CtVmhw8J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D_Xe6Xjh.js";import"./Header-BsG4AfeO.js";import"./Initials-DNzmwkQ0.js";import"./InlineCode-CMg57_NI.js";import"./LayoutCard-CAbUZ4z8.js";import"./Separator-sjczDa9g.js";import"./MessageSeparator-syCyyNp_.js";import"./NavigationGroup-Bhn5LtSm.js";import"./Notification-D9qeLTJG.js";import"./NotificationProvider-DdTUSSU-.js";import"./ProgressBar-D1AqnunX.js";import"./Rating-CrsgcNUp.js";import"./Skeleton-BJgfwKrL.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Gr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
