import{j as r,r as j}from"./iframe-GtWYOLNc.js";import{u as d,F as u,t as g,a as h}from"./Form-CJDsExi9.js";import{B as i}from"./Button-DAMH2RQe.js";import{S as b}from"./Section-PDyMtoME.js";import{A as E}from"./ActionGroup-CUP01UMb.js";import{s as f}from"./Action-DgPdZSGQ.js";import{A as m}from"./Autocomplete-D7rpdxJG.js";import{L as l}from"./Label-rRCJof1T.js";import{T as a}from"./TextField-moGYV2J3.js";import{O as S}from"./Option-8IFLLqcx.js";import{F as T}from"./useFieldComponent-CFSDwBJf.js";import"./index-nuYtCEEu.js";import"./flowComponent-BhbvfIbA.js";import"./index-DroEwyNc.js";import"./clsx-B-dksMZM.js";import"./index-Do7K3gX4.js";import"./useLocalizedStringFormatter-DE7ldODK.js";import"./context-D40YBGtd.js";import"./browser-Dfdmz1Vs.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-D3qu7dXh.js";import"./Text-Bh_VtmGj.js";import"./EmulatedBoldText-CB08elGP.js";import"./Text-CjcFKgn5.js";import"./utils-DD5Sc9KY.js";import"./LoadingSpinner-BgxzSWV-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DAFfpCNE.js";import"./ProgressBar-CdTHAJ2Y.js";import"./Label-CQFAMqNH.js";import"./Hidden-BU9Lcw6n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DTE1dj4A.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B3Z_0YqL.js";import"./useFocus-DFp-sRZK.js";import"./useFocusRing-DOaM9YXN.js";import"./useFocusable-jI0DLtpW.js";import"./ContextMenuSection-BqJoKa5n.js";import"./Dialog-E17SkaPF.js";import"./RSPContexts-prl6X50T.js";import"./OverlayArrow-DIM14olf.js";import"./useControlledState-DlI3gMwx.js";import"./Collection-Ce3y52jr.js";import"./CollectionBuilder-Dp0_4f88.js";import"./SelectionIndicator-PIsyHCAq.js";import"./Separator-BLTRkzm5.js";import"./SelectionManager-BxJ0cmnl.js";import"./useEvent-9aIM_XKO.js";import"./useCollator-CosXWie8.js";import"./FocusScope-CmjH0BfW.js";import"./VisuallyHidden-CMXGnTyG.js";import"./dynamic-D_-LYO4W.js";import"./getActionGroupSlot-DVt_1gUF.js";import"./useStatic-BUau0uD4.js";import"./context-B79p2l6c.js";import"./useOverlayController-Cm_PeV9X.js";import"./ReactAriaControlledValueFix-BuCvRdUH.js";import"./useFilter-Dr0KH3vi.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-Ctzb06j_.js";import"./FieldDescription-H7Ygmbn3.js";import"./TextField-DX8eTu1K.js";import"./Form-CKR5JFnD.js";import"./Group-CA7dPhnC.js";import"./Input-BPP_cYwL.js";import"./useTextField-CjuQjVvL.js";import"./useFormReset-C8pOBnDM.js";import"./useFormValidation-BcoBpGbt.js";import"./Popover-BloSQfLN.js";import"./OverlayContextProvider-C3tl0ORG.js";import"./ClearPropsContextView-C2nQoxxe.js";import"./ClearPropsContext-DAA0VQnf.js";import"./DragAndDrop-C0_dcMwk.js";import"./inertValue-BtJ4ldTb.js";import"./useListState-C8UoR5VM.js";import"./react-children-utilities-BE-u8eGk.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(t="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${t.split("@")[0]}@${e}`;return r.jsx(S,{value:o,textValue:o,children:o},o)}),zr={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const t=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),o=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(o,{name:"email",children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:t=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),r.jsx(T,{children:"ErrorFromOuterFieldError!"}),c(o)]})]})}},p={render:t=>{const e=d(),o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Autocomplete {...props} isInvalid>
          <TextField>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,Jr as __namedExportsOrder,zr as default};
