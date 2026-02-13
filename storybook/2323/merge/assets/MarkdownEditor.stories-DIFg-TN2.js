import{r as x,j as r}from"./iframe-Bq_dTdDz.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./ResetButton-BqUs2IaX.js";import{L as m}from"./Label-DlbZYBs5.js";import{B as l}from"./Button-DwhPeKe2.js";import{S as j}from"./Section-DNG5i0i9.js";import{A as b}from"./ActionGroup-CKWSskWv.js";import{s as d}from"./ActionBatch-DTgx0kqH.js";import{M as s}from"./MarkdownEditor-OkCZh2va.js";import{F as g}from"./FieldError-ClLnELEE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BU-d9n8a.js";import"./flowComponent-BeJ1jrGf.js";import"./index-Dif5dzDL.js";import"./clsx-B-dksMZM.js";import"./index-C2qM6Ecb.js";import"./Overlay-BhiillRq.js";import"./useOverlayController-BN71uM-Z.js";import"./useStatic-OW4DiFQ5.js";import"./OverlayContextProvider-CwxNfmUY.js";import"./LoadingSpinner-QnwB8HJT.js";import"./IconWarning-AvRveFf8.js";import"./remote-BGgAcFUF.js";import"./utils-Dc83Zc3S.js";import"./Dialog-atW1yRI0.js";import"./Button-B82FCYrG.js";import"./ProgressBar-BeilQHeM.js";import"./Label-CPBWbyCv.js";import"./Hidden-CYUCWFXf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BL_xrhrx.js";import"./context-DasT5rkr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CxmEVb--.js";import"./useFocus-zY2zj5L9.js";import"./useFocusRing-C2_YEmjA.js";import"./useFocusable-B7WP4__g.js";import"./RSPContexts-BEGF6Rgy.js";import"./OverlayArrow-D8uV1uDe.js";import"./useControlledState-DvV_L9jP.js";import"./Collection-CfTInUqx.js";import"./CollectionBuilder-DXHEkZnM.js";import"./SelectionIndicator-B0He5XEj.js";import"./Separator-oRLs3WBO.js";import"./Text-RESw6iu2.js";import"./SelectionManager-DJLtj_Nc.js";import"./useEvent-Bo6NaH-t.js";import"./useCollator-CL9Njxka.js";import"./FocusScope-jjJ71B2a.js";import"./useLocalizedStringFormatter-jkyob1yB.js";import"./VisuallyHidden-6gUpRQYP.js";import"./ActionGroupView-9NY9P0eT.js";import"./Content-CIrJX21x.js";import"./Heading-C8DRlUq-.js";import"./Heading-Cv2K6T9Y.js";import"./Text-3w39UNLL.js";import"./browser-D_Oin-6N.js";import"./EmulatedBoldText-D57I_Edz.js";import"./Modal-B1kIozjh.js";import"./ButtonView-Vc-lBIdn.js";import"./Flex-DWL773Qy.js";import"./useRef-C3TY9z6n.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CF0FAI_C.js";import"./getActionGroupSlot-C-FhbO6Z.js";import"./Markdown-DIfkhok0.js";import"./CodeBlock-4Ce33l1C.js";import"./CopyButton-CnDLZWR4.js";import"./Tooltip-fPwJV1ep.js";import"./react-children-utilities-BRhLEvhb.js";import"./InlineCode-BPC53hCi.js";import"./Link-CjzAVfHh.js";import"./Separator-C1h31YeY.js";import"./TextArea-Pn9Wxluw.js";import"./useFieldComponent-C92nVZms.js";import"./useControlledHostValueProps-Byhklanl.js";import"./FieldDescription-ByrQyhzl.js";import"./TextField-Bbc_VGXT.js";import"./FieldError-CB3_Y2qo.js";import"./Form-Bm3_NoD-.js";import"./Group-DFA2OkWU.js";import"./Input-b7EgChKn.js";import"./useTextField-BNdYQUXF.js";import"./useFormReset-BNYkLVEo.js";import"./useFormValidation-ofgJ0bTW.js";import"./AlertText-DLrJVcTW.js";import"./AlertIcon-DR4HtAzR.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const io=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,io as __namedExportsOrder,eo as default};
