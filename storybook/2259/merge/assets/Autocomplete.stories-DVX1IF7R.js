import{j as r,r as g}from"./iframe-BB26x0WO.js";import{u as c,F as d,t as b,b as h}from"./Form-D1o3KJhA.js";import{R as F,S as x}from"./ResetButton-CQhqclH6.js";import{B as f}from"./Button-BTY4YrG_.js";import{S as E}from"./Section-IPK-m1wF.js";import{A as T}from"./ActionGroup-B49LzYT3.js";import{s as u}from"./Action-DydPJm0t.js";import{A as i}from"./Autocomplete-WVR1SbbS.js";import{L as p}from"./Label-Dkznuq9f.js";import{T as l}from"./TextField-BzGNEgZ_.js";import{O as B}from"./Option-Do2bkODO.js";import{F as A}from"./FieldError-EbPb3FIT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-iWxR2zWf.js";import"./flowComponent-hUu8AB53.js";import"./index-DcuZ1z3T.js";import"./clsx-B-dksMZM.js";import"./index-CQcoQf9d.js";import"./useLocalizedStringFormatter-C6TuZupA.js";import"./context-CFwMSK2D.js";import"./browser-CM4yKXDn.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-B0cjT-cu.js";import"./useRef-BoNolS4p.js";import"./IconWarning-xtBRgQwR.js";import"./remote-BOIRgCVv.js";import"./Text-CVJJy1PS.js";import"./EmulatedBoldText-BMfkuJfp.js";import"./Text-C-QQ-f-7.js";import"./LoadingSpinner-jG3qv65g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CmW95qcG.js";import"./ProgressBar-1d3YwxHK.js";import"./Label-xrwNKiTo.js";import"./Hidden-Pwu5MO4E.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CXkgZKB9.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DgIl3AW_.js";import"./useFocus-BTahgc6b.js";import"./useFocusRing-3NylsfEU.js";import"./useFocusable-BCoGMlTE.js";import"./ContextMenuSection-DGimkJAp.js";import"./Dialog-rd60ApeF.js";import"./RSPContexts-DeiYbaO6.js";import"./OverlayArrow-DRxGu_ip.js";import"./useControlledState-Bi3RtZ50.js";import"./Collection-3Y1iCCsF.js";import"./CollectionBuilder-DSmRSiR5.js";import"./SelectionIndicator-eJ3IiPq5.js";import"./Separator-BCEfhEi-.js";import"./SelectionManager-CGOc2Oun.js";import"./useEvent-Dv3TI5So.js";import"./useCollator-Cs7p5znT.js";import"./FocusScope-CBDPVkwa.js";import"./VisuallyHidden-GAE_mByz.js";import"./getActionGroupSlot-DvPCnOJu.js";import"./useStatic-CBwNmb4h.js";import"./context-tsnqiuvV.js";import"./useOverlayController-CrgCUZX_.js";import"./useFieldComponent-uqIFFsha.js";import"./useFilter-DUPm6MtI.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-CEHEFmoJ.js";import"./FieldDescription-C9tQ8Z1l.js";import"./TextField-XAmj3fUL.js";import"./FieldError-BdEQwJOQ.js";import"./Form-D-p_8RL3.js";import"./Group-N-95shQ7.js";import"./Input-CX7n_Ikd.js";import"./useTextField-DyIHjJ7R.js";import"./useFormReset-DftD3Tx4.js";import"./useFormValidation-CSSQUpRU.js";import"./useControlledHostValueProps-xsHz9TIR.js";import"./Popover-Bk5Shd0d.js";import"./OverlayContextProvider-pMPh9iwI.js";import"./ListBox-BUof3nld.js";import"./DragAndDrop-De_6K2Iu.js";import"./inertValue-C9hwVdo4.js";import"./useListState-Cmsi2GNY.js";import"./AlertText-By5Jrr-P.js";import"./AlertIcon-8w60vasN.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),te={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
