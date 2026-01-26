import{j as r,r as g}from"./iframe-CBKKDtut.js";import{u as c,F as d,t as b,b as h}from"./Form-CPgp_8OF.js";import{R as F,S as x}from"./ResetButton-CJb_sarw.js";import{B as f}from"./Button-B9OQWjLR.js";import{S as E}from"./Section-DXY5zwlF.js";import{A as T}from"./ActionGroup-CTEI8oZ1.js";import{s as u}from"./Action-DoBIVRDz.js";import{A as i}from"./Autocomplete-CEUAJvqc.js";import{L as p}from"./Label-YKVXUmct.js";import{T as l}from"./TextField-iy_SMMJE.js";import{O as B}from"./Option-eTKPxroy.js";import{F as A}from"./FieldError-ncR-D_4-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C3t3tmF9.js";import"./flowComponent-D-Qq6Xd6.js";import"./index-Q7U-5PA1.js";import"./clsx-B-dksMZM.js";import"./index-fGZr3eAJ.js";import"./useLocalizedStringFormatter-Cg2HsiHj.js";import"./context-Bvh_z46p.js";import"./browser-C9q5kf03.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-CzD9rXMA.js";import"./useRef-DZEwAE_i.js";import"./IconWarning-BGeLtjSH.js";import"./remote-d08GjPRF.js";import"./Text-DXycmlPy.js";import"./EmulatedBoldText-eA5g4YLr.js";import"./Text-BipkjXt2.js";import"./LoadingSpinner-BvfPlxYK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DyYsKNHg.js";import"./ProgressBar-BptIcMSV.js";import"./Label-BzrfGAM1.js";import"./Hidden-BMhHdfnU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BGNrCt7d.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CCG6AvGE.js";import"./useFocus-BrZp4zBY.js";import"./useFocusRing-CCYWTYc5.js";import"./useFocusable-DQlHlYMC.js";import"./ContextMenuSection-CIoY6k-y.js";import"./Dialog-DqG8ZP0V.js";import"./RSPContexts-B9p0Af0m.js";import"./OverlayArrow-BBLTZ4Zv.js";import"./useControlledState-1Ujh64WW.js";import"./Collection-Ci7EvgUR.js";import"./CollectionBuilder-BsNn1R8F.js";import"./SelectionIndicator-D8RCowii.js";import"./Separator-CntAjx1Z.js";import"./SelectionManager-DFjBPYMf.js";import"./useEvent-BEHLnBZB.js";import"./useCollator-DdKTTQqQ.js";import"./FocusScope-Ds7_8mr5.js";import"./VisuallyHidden-BTRh3ybS.js";import"./getActionGroupSlot-CKDi87pY.js";import"./useStatic-n8g6U0tI.js";import"./context-B4Ey35Kl.js";import"./useOverlayController-BrNAIcQ_.js";import"./useFieldComponent-377eOR22.js";import"./useFilter-CViM8Lc3.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-DxiF4zVu.js";import"./FieldDescription-BY78pjgj.js";import"./TextField-B5o54xMd.js";import"./FieldError-6zsCD2mI.js";import"./Form-CoRvbdVN.js";import"./Group-CA1lCmka.js";import"./Input-DA2pnuWC.js";import"./useTextField-CZl6lYma.js";import"./useFormReset-tFiefpak.js";import"./useFormValidation-FH2NBgqd.js";import"./useControlledHostValueProps-BbK479M6.js";import"./Popover-C-P6E-d5.js";import"./OverlayContextProvider-C-EovWON.js";import"./ListBox-Bqudr6EA.js";import"./DragAndDrop-9PySBfhp.js";import"./inertValue-BM6AbzNP.js";import"./useListState-CAT_XgJI.js";import"./AlertText-BqYQV5FR.js";import"./AlertIcon-R8qprUXz.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),te={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
