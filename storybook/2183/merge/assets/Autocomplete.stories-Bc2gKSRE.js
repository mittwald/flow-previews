import{j as r,r as g}from"./iframe-nUnY8CpM.js";import{u as c,F as d}from"./Form-CFvv8rQ9.js";import{t as b,F as h}from"./Field-CI5_U4-n.js";import{B as f}from"./Button-Drav3_ks.js";import{S as E}from"./Section-D3jyF995.js";import{A as T}from"./ActionGroup-DFwXau3j.js";import{s as u}from"./Action-Akn1uW1v.js";import{A as i}from"./Autocomplete-B8JSZ09p.js";import{L as p}from"./Label-CarGuai1.js";import{T as l}from"./TextField-vG1e1KNQ.js";import{O as B}from"./Option-DHY70lsW.js";import{F as A}from"./FieldError-Dl4XoXDz.js";import{R as F}from"./ResetButton-hHtNxjTm.js";import{S as x}from"./SubmitButton-DcdLNLZc.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-vyiLhVPE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-BZsQ8DvG.js";import"./flowComponent-DiVWNePS.js";import"./index-Czo4z9CC.js";import"./clsx-B-dksMZM.js";import"./index-D5rarCk0.js";import"./useLocalizedStringFormatter-DxwRSSu1.js";import"./context-B5Mk59jD.js";import"./IconChevronDown-C6KAqmcJ.js";import"./remote-Bcop36Tp.js";import"./IconX-CEHyWrnq.js";import"./IconCheck-CMQi8hKM.js";import"./Text-CKSRxaE3.js";import"./EmulatedBoldText-CfkdfDH6.js";import"./Text-4n54moM_.js";import"./utils-DtyHAF7C.js";import"./LoadingSpinner-Wr4Rr6kM.js";import"./ariaLive-BFPjGELJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BQlojcF-.js";import"./ProgressBar-BfYlkvzs.js";import"./Label-B7kFjMQQ.js";import"./Hidden-DuLhuFUb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-ARnVSCS2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0chnYNQ.js";import"./useFocus-ik1bIJBj.js";import"./useFocusRing-FZMFjSRM.js";import"./useFocusable-DICTyCVG.js";import"./ContextMenuSection-DH9LKzKz.js";import"./lib-90ocxLs-.js";import"./Dialog-x6GsWu_T.js";import"./RSPContexts-CWBH7SuF.js";import"./OverlayArrow-CHkAkv_A.js";import"./useControlledState-CaC4m18c.js";import"./Collection-DKxVpLoc.js";import"./CollectionBuilder-UHR0HG3W.js";import"./SelectionIndicator-Cj3HhkcP.js";import"./Separator-DDl87Ima.js";import"./SelectionManager-f8KTi6JZ.js";import"./useEvent-DGx-2GiN.js";import"./useCollator-BNnpPJUs.js";import"./FocusScope-CB6t9Dkj.js";import"./VisuallyHidden-DJajrHPg.js";import"./getActionGroupSlot-CsQGMPlH.js";import"./useStatic-D4OCIKv7.js";import"./context-CUJwrxJk.js";import"./useFieldComponent-CwsJxGlb.js";import"./useFilter-DXnDbAf3.js";import"./useOverlayController-D3ZcYAE3.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-Dqhtcmoy.js";import"./FieldDescription-CiRWpG91.js";import"./TextField-DC8Uy_by.js";import"./FieldError-CG7ulvH_.js";import"./Form-DX8kqEOp.js";import"./Group-BykXvQmq.js";import"./Input-B5TNmDN2.js";import"./useTextField-BpK1hl2r.js";import"./useFormReset-B9MhH15U.js";import"./useFormValidation-BmCGlg1a.js";import"./useControlledHostValueProps-DFslcMmj.js";import"./Popover-DAIMajuO.js";import"./OverlayContextProvider-QZV7xJtt.js";import"./ListBox-Bo4RPoit.js";import"./DragAndDrop-C8xyW8Ul.js";import"./inertValue-Csm42f7o.js";import"./useListState-CpbQreVN.js";import"./IconDanger-BtbJ86A5.js";import"./useRef-DngU7hM5.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ne={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const pe=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,pe as __namedExportsOrder,ne as default};
