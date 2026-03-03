import{r as x,j as r}from"./iframe-Dx38AIDT.js";import{a as l,u as a,F as c,R as p,S as d,t as j}from"./ResetButton-D7LUbAoI.js";import{L as s}from"./Label-lvpVoRBR.js";import{B as t}from"./Button-Bhwtl7lS.js";import{S}from"./Section-CzQEEFga.js";import{A as b}from"./ActionGroup-CluBBM4L.js";import{s as u}from"./ActionBatch-B-iA-QhY.js";import{F as m}from"./FileField-4QeSCkxj.js";import{F as B}from"./FieldError-DY7Z21GR.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cw331Sxy.js";import"./flowComponent-BwBSRBJY.js";import"./index-B3w7UL3m.js";import"./clsx-B-dksMZM.js";import"./index-C4zw0wF6.js";import"./useLocalizedStringFormatter-D4oP4MPs.js";import"./context-CRsgLXVa.js";import"./ActionGroupView-RMB2K6y-.js";import"./Content-DSBqSoeM.js";import"./Heading-z0nw7kl0.js";import"./Heading-BiABk9m9.js";import"./RSPContexts-DnJfGcBy.js";import"./utils-uxa8p5vl.js";import"./Text-stRMORLN.js";import"./browser-Bgj4nWuI.js";import"./EmulatedBoldText-DkfYMVU4.js";import"./Text-CN5O_J5f.js";import"./Modal-0SZ3rvM2.js";import"./useOverlayController-Cqh70DsD.js";import"./useStatic-CD9yQ0OW.js";import"./Overlay-Dc_wkWXh.js";import"./OverlayContextProvider-tTA2mi55.js";import"./LoadingSpinner-CAXp-11u.js";import"./IconWarning-tem5fYZU.js";import"./remote-C7_Ru_dB.js";import"./Dialog-BIvPa65M.js";import"./Button-DXXdMML6.js";import"./ProgressBar-BzTC4ZoK.js";import"./Label-CRhDhtUr.js";import"./Hidden-fCjHF3ey.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--5Xg4_7C.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BU6JmZbW.js";import"./useFocus-C3KeEXKn.js";import"./useFocusRing-XbCssGNL.js";import"./useFocusable-CIjhaoEP.js";import"./OverlayArrow-DXkjfcol.js";import"./useControlledState-BekZOXin.js";import"./Collection-DFwYI0R_.js";import"./CollectionBuilder-d7mW72oL.js";import"./SelectionIndicator-D_Yc_rq7.js";import"./Separator-BVmogCl8.js";import"./SelectionManager-BSVgVRml.js";import"./useEvent-D7Cb0aSH.js";import"./useCollator-DTKHLM3i.js";import"./FocusScope-eq4FNALu.js";import"./VisuallyHidden-ma9EryWn.js";import"./ButtonView-CU_3hWkX.js";import"./Flex-CUcKFbzJ.js";import"./useRef-BQ2mDf6F.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-Bnn5st86.js";import"./getActionGroupSlot-CnwwqW5a.js";import"./useFormValidation-Dn8WL8kF.js";import"./FieldError-Cjk2dDkd.js";import"./Input-BQCGNTF8.js";import"./useFieldComponent-CxTx8kf3.js";import"./AlertText-BEiS7w5p.js";import"./AlertIcon-BbY5ij-p.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Gr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
