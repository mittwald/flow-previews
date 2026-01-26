import{j as r,r as g}from"./iframe-CO_SbVCH.js";import{u as c,F as d,t as b,b as h}from"./Form-CKDpo35Y.js";import{R as F,S as x}from"./ResetButton-DQlSeI9_.js";import{B as f}from"./Button-D1ylE5rB.js";import{S as E}from"./Section-DzQL888J.js";import{A as T}from"./ActionGroup-Y22B5gXp.js";import{s as u}from"./Action-0SsHJzT_.js";import{A as i}from"./Autocomplete-BbVhMKsz.js";import{L as p}from"./Label-CYi7f71w.js";import{T as l}from"./TextField-vhFOqv8K.js";import{O as B}from"./Option-BKo53MxU.js";import{F as A}from"./FieldError-ApIzqFqI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-7BzGeVfl.js";import"./flowComponent-CeLLqyNG.js";import"./index-BeUgZiCh.js";import"./clsx-B-dksMZM.js";import"./index-CiuYSwxA.js";import"./useLocalizedStringFormatter-CAz6Kqbv.js";import"./context-CagKbUB8.js";import"./browser-DqZUP5aL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-D6Fob7yO.js";import"./useRef-BtpKrvaf.js";import"./IconWarning-DnAYmwAM.js";import"./remote-CpzHRyGl.js";import"./Text-DxwcuI28.js";import"./EmulatedBoldText-f0IFAvFk.js";import"./Text-CKhrTn1e.js";import"./LoadingSpinner-d-LCgLDQ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B5AHzCCb.js";import"./ProgressBar-B7Qw6Oz5.js";import"./Label-DuIRh-OA.js";import"./Hidden-ZdS7KL-c.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dm4P9x_e.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dh95oJrl.js";import"./useFocus-CPWqIWXE.js";import"./useFocusRing-BEFuW2jQ.js";import"./useFocusable-CMm0HKMh.js";import"./ContextMenuSection-m6biFtp2.js";import"./Dialog-UmHwq-hs.js";import"./RSPContexts-BwOC89i_.js";import"./OverlayArrow-D4OM36Ak.js";import"./useControlledState-BplPLiu_.js";import"./Collection-ghLLd_h5.js";import"./CollectionBuilder-BVAhjiTU.js";import"./SelectionIndicator-Ca0su_yA.js";import"./Separator-CUNyVGir.js";import"./SelectionManager-XN_Qhkpg.js";import"./useEvent-BzLyT1Z_.js";import"./useCollator-BikNysJq.js";import"./FocusScope-Ptf693hL.js";import"./VisuallyHidden-DDIsYkXL.js";import"./getActionGroupSlot-DAKAs_h9.js";import"./useStatic-D6cqHfiz.js";import"./context-BbDJJF8K.js";import"./useOverlayController-2Ut0kNT7.js";import"./useFieldComponent-DVhqfPKz.js";import"./useFilter-CVttBtdX.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-BTtTaUzL.js";import"./FieldDescription-C20y_Jsx.js";import"./TextField-DUEn72X9.js";import"./FieldError-C8I7NIV7.js";import"./Form-BhtxhsPb.js";import"./Group-DHq-dfDY.js";import"./Input-Cf-031DZ.js";import"./useTextField-D7nnFmGf.js";import"./useFormReset-DQMHGRs0.js";import"./useFormValidation-Cv-TUnys.js";import"./useControlledHostValueProps-B4-ZmfcU.js";import"./Popover-Dm9PqtUw.js";import"./OverlayContextProvider-6b1aLjhJ.js";import"./ListBox-B5H_unwU.js";import"./DragAndDrop-DEfxam6k.js";import"./inertValue-CR7aDS6C.js";import"./useListState-DFVpriIW.js";import"./AlertText-BQJ0P8Cx.js";import"./AlertIcon-3Vdm-iqE.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),te={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const oe=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,oe as __namedExportsOrder,te as default};
