import{r as g,j as r}from"./iframe-Bq_dTdDz.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-BqUs2IaX.js";import{B as f}from"./Button-DwhPeKe2.js";import{S as E}from"./Section-DNG5i0i9.js";import{A as T}from"./ActionGroup-CKWSskWv.js";import{s as u}from"./ActionBatch-DTgx0kqH.js";import{A as i}from"./Autocomplete-CMLtbaDI.js";import{L as p}from"./Label-DlbZYBs5.js";import{T as l}from"./TextField-D1NhvG6K.js";import{O as B}from"./Option-BCYtVncZ.js";import{F as A}from"./FieldError-ClLnELEE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BU-d9n8a.js";import"./flowComponent-BeJ1jrGf.js";import"./index-Dif5dzDL.js";import"./clsx-B-dksMZM.js";import"./index-C2qM6Ecb.js";import"./Overlay-BhiillRq.js";import"./useOverlayController-BN71uM-Z.js";import"./useStatic-OW4DiFQ5.js";import"./OverlayContextProvider-CwxNfmUY.js";import"./LoadingSpinner-QnwB8HJT.js";import"./IconWarning-AvRveFf8.js";import"./remote-BGgAcFUF.js";import"./utils-Dc83Zc3S.js";import"./Dialog-atW1yRI0.js";import"./Button-B82FCYrG.js";import"./ProgressBar-BeilQHeM.js";import"./Label-CPBWbyCv.js";import"./Hidden-CYUCWFXf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BL_xrhrx.js";import"./context-DasT5rkr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CxmEVb--.js";import"./useFocus-zY2zj5L9.js";import"./useFocusRing-C2_YEmjA.js";import"./useFocusable-B7WP4__g.js";import"./RSPContexts-BEGF6Rgy.js";import"./OverlayArrow-D8uV1uDe.js";import"./useControlledState-DvV_L9jP.js";import"./Collection-CfTInUqx.js";import"./CollectionBuilder-DXHEkZnM.js";import"./SelectionIndicator-B0He5XEj.js";import"./Separator-oRLs3WBO.js";import"./Text-RESw6iu2.js";import"./SelectionManager-DJLtj_Nc.js";import"./useEvent-Bo6NaH-t.js";import"./useCollator-CL9Njxka.js";import"./FocusScope-jjJ71B2a.js";import"./useLocalizedStringFormatter-jkyob1yB.js";import"./VisuallyHidden-6gUpRQYP.js";import"./ActionGroupView-9NY9P0eT.js";import"./Content-CIrJX21x.js";import"./Heading-C8DRlUq-.js";import"./Heading-Cv2K6T9Y.js";import"./Text-3w39UNLL.js";import"./browser-D_Oin-6N.js";import"./EmulatedBoldText-D57I_Edz.js";import"./Modal-B1kIozjh.js";import"./ButtonView-Vc-lBIdn.js";import"./Flex-DWL773Qy.js";import"./useRef-C3TY9z6n.js";import"./ContextMenuSection-CF0FAI_C.js";import"./getActionGroupSlot-C-FhbO6Z.js";import"./useFieldComponent-C92nVZms.js";import"./useFilter-DOdOmGLd.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-Byhklanl.js";import"./FieldDescription-ByrQyhzl.js";import"./TextField-Bbc_VGXT.js";import"./FieldError-CB3_Y2qo.js";import"./Form-Bm3_NoD-.js";import"./Group-DFA2OkWU.js";import"./Input-b7EgChKn.js";import"./useTextField-BNdYQUXF.js";import"./useFormReset-BNYkLVEo.js";import"./useFormValidation-ofgJ0bTW.js";import"./Popover-DIyRcO8w.js";import"./ListBox-Cdo7fMTC.js";import"./DragAndDrop-CFMuFJES.js";import"./inertValue-CrMbitIz.js";import"./useListState-DqBcva8T.js";import"./AlertText-DLrJVcTW.js";import"./AlertIcon-DR4HtAzR.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),se={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props}>
          <TextField isInvalid>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
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
}`,...n.parameters?.docs?.source}}};const ne=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,ne as __namedExportsOrder,se as default};
