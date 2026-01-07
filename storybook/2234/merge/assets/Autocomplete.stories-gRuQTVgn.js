import{j as r,r as g}from"./iframe-Cz8_C8zY.js";import{u as c,F as d,t as b,b as h}from"./Form-C-tofb87.js";import{R as F,S as x}from"./ResetButton-Bv8Dr5T9.js";import{B as f}from"./Button-D15OVnQK.js";import{S as E}from"./Section-SSHhfNn0.js";import{A as T}from"./ActionGroup-DiMyb9cq.js";import{s as u}from"./Action-aXgHP_6u.js";import{A as i}from"./Autocomplete-Dkbip5p4.js";import{L as p}from"./Label-gR0Y05hv.js";import{T as l}from"./TextField-XdgzNgdl.js";import{O as B}from"./Option-DK18wYkz.js";import{F as A}from"./FieldError-CEw8HJGt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CeA3emBk.js";import"./flowComponent-BcPJG4Ua.js";import"./index-Cdfsiuxw.js";import"./clsx-B-dksMZM.js";import"./index-SrORw6vN.js";import"./useLocalizedStringFormatter-Bo3Sbs5c.js";import"./context-VkDhZA-x.js";import"./browser-B6rfwAqc.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-BAKlH2Lm.js";import"./useRef-CsRDIUk-.js";import"./IconWarning-DLbRRuK1.js";import"./remote-D3nX27fk.js";import"./Text-YjLUuftS.js";import"./EmulatedBoldText-Dt-OzvRV.js";import"./Text-Cr087Rh_.js";import"./LoadingSpinner-ClQMAkzE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-7cKgwoPB.js";import"./ProgressBar-CyaO-AON.js";import"./Label-2kcHPH94.js";import"./Hidden-CWAqagDm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BFm9pXXT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DcZz-lB5.js";import"./useFocus-DFbFm1Xx.js";import"./useFocusRing-BDmU1dd9.js";import"./useFocusable-CJ-4fYj7.js";import"./ContextMenuSection-DUguC81d.js";import"./Dialog-DK4i5yRx.js";import"./RSPContexts-CQQaQyDU.js";import"./OverlayArrow-CwaEkqIl.js";import"./useControlledState-C0o23ioH.js";import"./Collection-2S6_FH7n.js";import"./CollectionBuilder-CWbLFvvU.js";import"./SelectionIndicator-DD4cK7So.js";import"./Separator-2dOH-BB_.js";import"./SelectionManager-C5vFB_ZW.js";import"./useEvent-Wcg6Cj6E.js";import"./useCollator-B9bMczBX.js";import"./FocusScope-DR3pULV0.js";import"./VisuallyHidden-7uh1Rm92.js";import"./getActionGroupSlot-DD9h-bxs.js";import"./useStatic-DFVrJYQp.js";import"./context-usF9YeFM.js";import"./useOverlayController-BjnNyR7e.js";import"./useFieldComponent--MNREdev.js";import"./useFilter-DZr1KQYE.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-B5nJt9Vp.js";import"./FieldDescription-D3ZeP19z.js";import"./TextField-DW-FA0T0.js";import"./FieldError-B254xHCi.js";import"./Form-Bv3CSU0e.js";import"./Group-CFuZraH7.js";import"./Input-MUdQf2Tz.js";import"./useTextField-B_xw08pL.js";import"./useFormReset-CSPeTQLr.js";import"./useFormValidation-DBiWbYgf.js";import"./useControlledHostValueProps-D5L-E0rU.js";import"./Popover-BRwT-TU7.js";import"./OverlayContextProvider-DHHLRya5.js";import"./ListBox-C9jiuV-E.js";import"./DragAndDrop-DxdCoQqI.js";import"./inertValue-Di5kgTsi.js";import"./useListState-Bw8UNbeq.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ee=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,ee as __namedExportsOrder,re as default};
