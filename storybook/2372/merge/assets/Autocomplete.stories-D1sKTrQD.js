import{r as g,j as r}from"./iframe-C1IdntWq.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-De-Psidt.js";import{B as f}from"./Button-mSWnhOmK.js";import{S as E}from"./Section-AIy1dCAg.js";import{A as T}from"./ActionGroup-BahMWm8O.js";import{s as u}from"./ActionBatch-VQdQXkn7.js";import{A as i}from"./Autocomplete-yXoqX2uL.js";import{L as p}from"./Label-Be-SvMDa.js";import{T as l}from"./TextField-zuOUGsjF.js";import{O as B}from"./Option-DvZti2O5.js";import{F as A}from"./FieldError-DsJ8c-ZE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CUpn0zgH.js";import"./flowComponent-Bun1s6Mg.js";import"./index-BFORpPeP.js";import"./clsx-B-dksMZM.js";import"./index-Coy6T-Pa.js";import"./useLocalizedStringFormatter-X4lAHS4Q.js";import"./context-CuxmdylV.js";import"./ActionGroupView-U73m2CoE.js";import"./Content-BSdmmpR7.js";import"./Heading-CLkS-w3U.js";import"./Heading-BVXFLwsq.js";import"./RSPContexts-DcVP09I4.js";import"./utils-CNo0qaX0.js";import"./Text-W7h8_LNr.js";import"./browser-WXx3m9ky.js";import"./EmulatedBoldText-COIRRGWk.js";import"./Text-CkLpWhuM.js";import"./Modal-Cd8QIcZl.js";import"./useOverlayController-DbY_Tl3x.js";import"./useStatic-CDGCPgxo.js";import"./Overlay-vUOl12kW.js";import"./OverlayContextProvider-Car-oabl.js";import"./LoadingSpinner-C4dBxxC2.js";import"./IconWarning-BY-3yqWN.js";import"./remote-DdxKfasm.js";import"./Dialog-DaGSiRkj.js";import"./Button-C7cBjDhV.js";import"./ProgressBar-B94oTEu8.js";import"./Label-D03EKzy1.js";import"./Hidden-MEHJLAG1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CAzlzskU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIzz4kJt.js";import"./useFocus-HLQCbRtK.js";import"./useFocusRing-DQuA22ZQ.js";import"./useFocusable-Z0Y9nSjp.js";import"./OverlayArrow-DbaAbVnX.js";import"./useControlledState-FuYpKfPj.js";import"./Collection-C0olx5yt.js";import"./CollectionBuilder-ARpC-11z.js";import"./SelectionIndicator-DffOr8wA.js";import"./Separator-B7Oy5oGV.js";import"./SelectionManager-DepyWfPp.js";import"./useEvent-C_lXtwpa.js";import"./useCollator-BHhXYjcX.js";import"./FocusScope-C2GkFJYp.js";import"./VisuallyHidden-709t6SxP.js";import"./ButtonView-UjagI0v2.js";import"./Flex-DyCVhYjZ.js";import"./useRef-m9duQCt_.js";import"./ContextMenuSection-Bx9t8tzE.js";import"./getActionGroupSlot-JkJsMZpG.js";import"./useFieldComponent-o_u9PYdj.js";import"./useFilter-CS6Xb8-j.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-B0HcYsZy.js";import"./FieldDescription-CN54GY3S.js";import"./TextField-f8CG66Mv.js";import"./FieldError-DgBT4dcF.js";import"./Form-CijQ_R7m.js";import"./Group-DCbRkIJ9.js";import"./Input-Des9E_um.js";import"./useTextField-DDX9uSSl.js";import"./useFormReset-CaX1fgpZ.js";import"./useFormValidation-CloSy7V5.js";import"./Popover-BzNCFXu7.js";import"./ListBox-C6dzBSo7.js";import"./DragAndDrop-CH7ujv_v.js";import"./inertValue-DxWqM6KB.js";import"./useListState-SHHa_w6_.js";import"./AlertText-LATyc42T.js";import"./AlertIcon-CvmjcNLC.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),se={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
