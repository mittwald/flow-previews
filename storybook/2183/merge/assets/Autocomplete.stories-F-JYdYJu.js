import{j as r,r as g}from"./iframe-CQakcPxy.js";import{u as c,F as d}from"./Form-47CGJ_Aq.js";import{t as b,F as h}from"./Field-67CmYIVd.js";import{B as f}from"./Button-BgdUtfaQ.js";import{S as E}from"./Section-B-CKtBZu.js";import{A as T}from"./ActionGroup-BNhvl4_-.js";import{s as u}from"./Action-DugCc7r9.js";import{A as i}from"./Autocomplete-DhgIOdrW.js";import{L as p}from"./Label-Bciz4GF2.js";import{T as l}from"./TextField-LSyoP2My.js";import{O as B}from"./Option-DUDfIsFp.js";import{F as A}from"./FieldError-8S-oU2Os.js";import{R as F}from"./ResetButton-DQSr2qrJ.js";import{S as x}from"./SubmitButton-CWp_lRmI.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-n5THB09p.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-smSIHOJr.js";import"./flowComponent-CGl7t6Dn.js";import"./index-p-QrdfBe.js";import"./clsx-B-dksMZM.js";import"./index-Cea8xGLH.js";import"./useLocalizedStringFormatter-BjsiUt0Q.js";import"./context-CTwP8X6y.js";import"./IconChevronDown-DRX1rHio.js";import"./remote-DEFV7i-V.js";import"./IconX-BoJQTJmc.js";import"./IconCheck-BnOPUo-b.js";import"./Text-BtxvTgzr.js";import"./EmulatedBoldText-BugEiGRa.js";import"./Text-C-10tsQv.js";import"./utils-kpK_hrRV.js";import"./LoadingSpinner-DSvn_mnc.js";import"./ariaLive-CRk_T6YS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CodSfk9S.js";import"./ProgressBar-Dp4X-EbZ.js";import"./Label-CTPlNXVy.js";import"./Hidden-BPFiveoH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bql10b_o.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CTHZkDu6.js";import"./useFocus-DdJNefAV.js";import"./useFocusRing-DLxPKRwM.js";import"./useFocusable-Da5l0bUG.js";import"./ContextMenuSection-D-BIeSKY.js";import"./lib-90ocxLs-.js";import"./Dialog-B0kzP3Mz.js";import"./RSPContexts-BrDe4Bm2.js";import"./OverlayArrow-C79QRDx0.js";import"./useControlledState-BdjUlaE2.js";import"./Collection-Ci9d0blp.js";import"./CollectionBuilder-BUmJa08T.js";import"./SelectionIndicator-vLsFNsIa.js";import"./Separator-D8Y3LrcI.js";import"./SelectionManager-1KeHygA_.js";import"./useEvent-Des4UomZ.js";import"./useCollator-INJOKvYJ.js";import"./FocusScope-Bt02kxJY.js";import"./VisuallyHidden-B_I1UO8l.js";import"./getActionGroupSlot-roYHWcsR.js";import"./useStatic-BotBIdFp.js";import"./context-BwdTo_HZ.js";import"./useFieldComponent-7TLC4lNV.js";import"./useFilter-RGYW7DpS.js";import"./useOverlayController-DnqhdB7Q.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-ClyvIkb2.js";import"./FieldDescription-DGqoCi4X.js";import"./TextField-069ZYtiG.js";import"./FieldError-CB5plbtQ.js";import"./Form-Cw0lrebL.js";import"./Group-EK03D1ng.js";import"./Input-BcEHoXQP.js";import"./useTextField-ChzRdWGu.js";import"./useFormReset-DCX2Qfen.js";import"./useFormValidation-8JnUx94A.js";import"./useControlledHostValueProps-BZjTuBfL.js";import"./Popover-BybQ1H5j.js";import"./OverlayContextProvider-CGlhX4oZ.js";import"./ListBox-DxWicocP.js";import"./DragAndDrop-DUUBe1ns.js";import"./inertValue-B4tEM2Om.js";import"./useListState-m5ss9_Oz.js";import"./IconDanger-BPWM_X_l.js";import"./useRef-BCfuUs1f.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ne={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
