import{j as r,r as g}from"./iframe-tI_lG94_.js";import{u as c,F as d,t as b,b as h}from"./Form-ADUKHz3J.js";import{R as F,S as x}from"./ResetButton-CllDkjik.js";import{B as f}from"./Button-WUI-ZJ9l.js";import{S as E}from"./Section-Zl-SwqAC.js";import{A as T}from"./ActionGroup-d8ZYu-yv.js";import{s as u}from"./Action-CkhZi8kw.js";import{A as i}from"./Autocomplete-kTH828IA.js";import{L as p}from"./Label-CdVUwStZ.js";import{T as l}from"./TextField-BMoy0rRP.js";import{O as B}from"./Option-C0ejcwgi.js";import{F as A}from"./FieldError-DYW7UPuf.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DqOiE30k.js";import"./flowComponent-C7r6bord.js";import"./index-Cx51kJJc.js";import"./clsx-B-dksMZM.js";import"./index-CBk6rXlg.js";import"./useLocalizedStringFormatter-BU5vto5x.js";import"./context-CBF_EHvQ.js";import"./browser-DuhBvQkx.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-bmh-HeLH.js";import"./useRef-kpcDmihX.js";import"./IconWarning-BFYQkdin.js";import"./remote-CmKo-bli.js";import"./Text-DDIuCQxA.js";import"./EmulatedBoldText-CqR-YL6D.js";import"./Text-Bx7ijqLX.js";import"./LoadingSpinner-KbaLfraT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-EHR8zEQX.js";import"./ProgressBar-B0YygRTY.js";import"./Label-BRs8jfGQ.js";import"./Hidden-xjuSUFbD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-dT-ksHYF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C1ke7TUF.js";import"./useFocus-DCHopMY8.js";import"./useFocusRing-Dgbmnyxw.js";import"./useFocusable-BnM0ssdw.js";import"./ContextMenuSection-Co6pbj1l.js";import"./Dialog-Bo5p_Zqr.js";import"./RSPContexts-C1ceWNax.js";import"./OverlayArrow-DuDGHp0O.js";import"./useControlledState-BE5RFE46.js";import"./Collection-DCiKuUl7.js";import"./CollectionBuilder-Bsyu2Qik.js";import"./SelectionIndicator-uIlcbJnR.js";import"./Separator-AUomIBZD.js";import"./SelectionManager-BHP7q8X0.js";import"./useEvent-CrsvrwL5.js";import"./useCollator-BwiXk11m.js";import"./FocusScope-Brgrzlff.js";import"./VisuallyHidden-sfQiOa3Q.js";import"./getActionGroupSlot-DPvye52P.js";import"./useStatic-vWo9ean7.js";import"./context-Ci5c_Wjo.js";import"./useOverlayController-B_c7Bk6_.js";import"./useFieldComponent-_Dyiwxtg.js";import"./useFilter-CtVpXd3A.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-Cf2px3GI.js";import"./FieldDescription-CSWmc1EX.js";import"./TextField-U30YbphT.js";import"./FieldError-CdG59lLT.js";import"./Form-B72YgAOe.js";import"./Group-CWqc5_8a.js";import"./Input-DTXfGVIZ.js";import"./useTextField-DIaV0kgB.js";import"./useFormReset-LNt8buNd.js";import"./useFormValidation--MR_E_GW.js";import"./useControlledHostValueProps-Mo_orcSi.js";import"./Popover-DkoOxFI-.js";import"./OverlayContextProvider-CkzPVZUF.js";import"./ListBox-D8QUZK5Z.js";import"./DragAndDrop-BI1CA6w8.js";import"./inertValue-D_hIjuwe.js";import"./useListState-DFOrI7mL.js";import"./InlineAlert-DC2W_zeL.js";import"./AlertIcon-BkNTScum.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),te={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
