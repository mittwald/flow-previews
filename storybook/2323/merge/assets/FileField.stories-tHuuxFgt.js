import{r as x,j as r}from"./iframe-Bq_dTdDz.js";import{a as l,u as a,F as c,R as p,S as d,t as j}from"./ResetButton-BqUs2IaX.js";import{L as s}from"./Label-DlbZYBs5.js";import{B as t}from"./Button-DwhPeKe2.js";import{S}from"./Section-DNG5i0i9.js";import{A as b}from"./ActionGroup-CKWSskWv.js";import{s as u}from"./ActionBatch-DTgx0kqH.js";import{F as m}from"./FileField-rtnWJesL.js";import{F as B}from"./FieldError-ClLnELEE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BU-d9n8a.js";import"./flowComponent-BeJ1jrGf.js";import"./index-Dif5dzDL.js";import"./clsx-B-dksMZM.js";import"./index-C2qM6Ecb.js";import"./Overlay-BhiillRq.js";import"./useOverlayController-BN71uM-Z.js";import"./useStatic-OW4DiFQ5.js";import"./OverlayContextProvider-CwxNfmUY.js";import"./LoadingSpinner-QnwB8HJT.js";import"./IconWarning-AvRveFf8.js";import"./remote-BGgAcFUF.js";import"./utils-Dc83Zc3S.js";import"./Dialog-atW1yRI0.js";import"./Button-B82FCYrG.js";import"./ProgressBar-BeilQHeM.js";import"./Label-CPBWbyCv.js";import"./Hidden-CYUCWFXf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BL_xrhrx.js";import"./context-DasT5rkr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CxmEVb--.js";import"./useFocus-zY2zj5L9.js";import"./useFocusRing-C2_YEmjA.js";import"./useFocusable-B7WP4__g.js";import"./RSPContexts-BEGF6Rgy.js";import"./OverlayArrow-D8uV1uDe.js";import"./useControlledState-DvV_L9jP.js";import"./Collection-CfTInUqx.js";import"./CollectionBuilder-DXHEkZnM.js";import"./SelectionIndicator-B0He5XEj.js";import"./Separator-oRLs3WBO.js";import"./Text-RESw6iu2.js";import"./SelectionManager-DJLtj_Nc.js";import"./useEvent-Bo6NaH-t.js";import"./useCollator-CL9Njxka.js";import"./FocusScope-jjJ71B2a.js";import"./useLocalizedStringFormatter-jkyob1yB.js";import"./VisuallyHidden-6gUpRQYP.js";import"./ActionGroupView-9NY9P0eT.js";import"./Content-CIrJX21x.js";import"./Heading-C8DRlUq-.js";import"./Heading-Cv2K6T9Y.js";import"./Text-3w39UNLL.js";import"./browser-D_Oin-6N.js";import"./EmulatedBoldText-D57I_Edz.js";import"./Modal-B1kIozjh.js";import"./ButtonView-Vc-lBIdn.js";import"./Flex-DWL773Qy.js";import"./useRef-C3TY9z6n.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CF0FAI_C.js";import"./getActionGroupSlot-C-FhbO6Z.js";import"./useFormValidation-ofgJ0bTW.js";import"./FieldError-CB3_Y2qo.js";import"./Input-b7EgChKn.js";import"./useFieldComponent-C92nVZms.js";import"./AlertText-DLrJVcTW.js";import"./AlertIcon-DR4HtAzR.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Gr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
