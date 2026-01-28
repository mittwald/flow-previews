import{j as r,r as g}from"./iframe-DQPKoo92.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-C9845Jax.js";import{B as f}from"./Button-0l0f_jx8.js";import{S as E}from"./Section-CU_KJgGZ.js";import{A as T}from"./ActionGroup-BPPgCs6z.js";import{s as u}from"./Action-DXbaOV3K.js";import{A as i}from"./Autocomplete-Bui3LQQn.js";import{L as p}from"./Label-Og-F06uZ.js";import{T as l}from"./TextField-LQvnq3Dq.js";import{O as B}from"./Option-Md9_N39F.js";import{F as A}from"./FieldError-IxBtEnB-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DGh7GyZ8.js";import"./flowComponent-DVIe49dZ.js";import"./index-B3Bpj3GD.js";import"./clsx-B-dksMZM.js";import"./index-CnP3WCIP.js";import"./useLocalizedStringFormatter-CbBU4IdI.js";import"./context-CJqjcP4U.js";import"./useRef-DfqHgUbo.js";import"./utils-XAdJPTNp.js";import"./ButtonView-BJjz2IGv.js";import"./browser-ChlnFVHS.js";import"./IconWarning-CpLICj99.js";import"./remote-BNYVvti7.js";import"./Text-C51WlGhJ.js";import"./EmulatedBoldText-ZCYLfeIO.js";import"./Text-Y949w0K8.js";import"./LoadingSpinner-B8goxKJR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7sB4TeW.js";import"./ProgressBar-Cy5AjeoP.js";import"./Label-DrxyNCZO.js";import"./Hidden-BalHJt_t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DkBHutKV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ByCBMVLm.js";import"./useFocus-BE88ppMu.js";import"./useFocusRing-Cni30Eah.js";import"./useFocusable-DX4YK8A-.js";import"./ContextMenuSection-BCwogbjE.js";import"./Dialog-DjFTJjHY.js";import"./RSPContexts-C1KLf5C0.js";import"./OverlayArrow-CG2s7j2J.js";import"./useControlledState-CudIhSdL.js";import"./Collection-YBemO0n0.js";import"./CollectionBuilder-n6Ro7SqS.js";import"./SelectionIndicator-DugKwRvD.js";import"./Separator-CC-j5b8u.js";import"./SelectionManager-0yrNUuw-.js";import"./useEvent-CfqveZ0P.js";import"./useCollator-BoFTkl_Q.js";import"./FocusScope-CJXytNJ4.js";import"./VisuallyHidden-Dk42l2-2.js";import"./getActionGroupSlot-BNoomJEc.js";import"./useStatic-AmwUmW1y.js";import"./context-Fi_0LQNU.js";import"./useOverlayController-C_B26ZeO.js";import"./useFieldComponent-BKiBq2W6.js";import"./useFilter-B_BpuPdy.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-DNuLdLmt.js";import"./FieldDescription-TOm-cQme.js";import"./TextField-BdwVHITI.js";import"./FieldError-C-pwln9P.js";import"./Form-C06cTOQY.js";import"./Group-hfhbZ0QM.js";import"./Input-MWzFGwJT.js";import"./useTextField-C7hH2N6q.js";import"./useFormReset-C7RuWveb.js";import"./useFormValidation-B8bsM8-M.js";import"./useControlledHostValueProps-Cp6qVjJt.js";import"./Popover-BWekKAiU.js";import"./OverlayContextProvider-CDaDnEoz.js";import"./ListBox-6VjdjWOp.js";import"./DragAndDrop-DmKRC3fx.js";import"./inertValue-BQECVFZW.js";import"./useListState-BW864HOW.js";import"./AlertText-C5_JXWa-.js";import"./AlertIcon-v4rlNZlK.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ee={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const te=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,te as __namedExportsOrder,ee as default};
