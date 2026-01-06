import{j as r,r as g}from"./iframe-BAg_Vkif.js";import{u as c,F as d,t as b,b as h}from"./Form-B5JpX-3g.js";import{R as F,S as x}from"./ResetButton-Cn7zQX05.js";import{B as f}from"./Button-CNza9GnT.js";import{S as E}from"./Section-k31Ld_a5.js";import{A as T}from"./ActionGroup-DE4bxHka.js";import{s as u}from"./Action-BOjxF4Dl.js";import{A as i}from"./Autocomplete-B_ydubG-.js";import{L as p}from"./Label-DDreQZVm.js";import{T as l}from"./TextField-ClAiJiG0.js";import{O as B}from"./Option-cmtFPnm_.js";import{F as A}from"./FieldError-C6VlTPyB.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-eE1nsZvE.js";import"./flowComponent-Br_xtRU3.js";import"./index-DNdviT-s.js";import"./clsx-B-dksMZM.js";import"./index-ClwrdcL8.js";import"./useLocalizedStringFormatter-BJUyDOOi.js";import"./context-Dr2F39lD.js";import"./browser-CG8hIWrH.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-BI8UFEcl.js";import"./useRef-B9ca9jGF.js";import"./IconWarning-eOJWxr99.js";import"./remote-OUS6bpte.js";import"./Text-Cv_CDcg6.js";import"./EmulatedBoldText-Dzw3SPd4.js";import"./Text-B1sdohWQ.js";import"./LoadingSpinner-BktXBT1I.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-UGLVSCHM.js";import"./ProgressBar-CpBnM9iR.js";import"./Label-Bx8dS0aq.js";import"./Hidden-BiPkEj1j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8b0YN0Pv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BNrva4v9.js";import"./useFocus-L8RhZ1QR.js";import"./useFocusRing-D5C_zsQK.js";import"./useFocusable-0NuZ-hi3.js";import"./ContextMenuSection-BZOfIkxf.js";import"./Dialog-BlnwYq_Z.js";import"./RSPContexts-DM5FD37h.js";import"./OverlayArrow-CH26SGjP.js";import"./useControlledState-C63VSZxO.js";import"./Collection-CPHZYP7m.js";import"./CollectionBuilder-7_bsJlU3.js";import"./SelectionIndicator-zMpThTxY.js";import"./Separator-B5uze-er.js";import"./SelectionManager-DlI-VKzy.js";import"./useEvent-CvZlzKtX.js";import"./useCollator--NIMsuGj.js";import"./FocusScope-CX8aMKJ8.js";import"./VisuallyHidden-0Cja9mQD.js";import"./getActionGroupSlot-B4_mqTXX.js";import"./useStatic-DpED2Oge.js";import"./context-BAbefeLZ.js";import"./useOverlayController-DRKioFUp.js";import"./useFieldComponent-B6Kjd1ej.js";import"./useFilter-BvW3bfU1.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-Db8VVLgm.js";import"./FieldDescription-BcT__64l.js";import"./TextField-yGQ0KKZp.js";import"./FieldError-CzfSrdz6.js";import"./Form-YKM3tWZS.js";import"./Group-W4MUpB1W.js";import"./Input-E6SU_N0O.js";import"./useTextField-v_8aHGWN.js";import"./useFormReset-cz3XyTOd.js";import"./useFormValidation-2zAOI2ZU.js";import"./useControlledHostValueProps-Ccn5EjqQ.js";import"./Popover-DljJ0khj.js";import"./OverlayContextProvider-Bkht6Vbm.js";import"./ListBox-VXsGReVn.js";import"./DragAndDrop-CJPxnbQs.js";import"./inertValue-D6y8SLy_.js";import"./useListState-BsryljVK.js";import"./InlineAlert-mZj4wy81.js";import"./AlertIcon-Ce-Fu2Pm.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),te={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
