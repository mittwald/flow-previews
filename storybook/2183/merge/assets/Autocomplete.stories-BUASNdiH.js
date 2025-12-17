import{j as r,r as g}from"./iframe-B7RREkGu.js";import{u as c,F as d}from"./Form-BHjZ7jIc.js";import{t as b,F as h}from"./Field-BIj9crRk.js";import{B as f}from"./Button-TsdLobX9.js";import{S as E}from"./Section-D2KxvX5n.js";import{A as T}from"./ActionGroup-WdHpAfwq.js";import{s as u}from"./Action-BcGzUsr7.js";import{A as i}from"./Autocomplete-CGu7OJ_E.js";import{L as p}from"./Label-DJkUDzdc.js";import{T as l}from"./TextField-2VXbuv2z.js";import{O as B}from"./Option-Bb7Ef-Yu.js";import{F as A}from"./FieldError-CukmHJnZ.js";import{R as F}from"./ResetButton-feHLzk8J.js";import{S as x}from"./SubmitButton-DO8cAR1F.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DkVC7uJT.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-CWl0hyOW.js";import"./flowComponent-Ck0proso.js";import"./index-DRk3fGOo.js";import"./clsx-B-dksMZM.js";import"./index-C8g7-GlJ.js";import"./useLocalizedStringFormatter-DPy56mLw.js";import"./context-Bh5Je-Bl.js";import"./IconChevronDown-D-2czTjO.js";import"./remote-Ba-TbkWY.js";import"./IconX-B38mn789.js";import"./IconCheck-KHnf6U2_.js";import"./Text-DoQtsqjx.js";import"./EmulatedBoldText-Coo_6hrl.js";import"./Text-CPOpiDMW.js";import"./utils-IlafnyMI.js";import"./LoadingSpinner-BcPCL_oT.js";import"./ariaLive-Cy4z0itg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-0GEfT2Oo.js";import"./ProgressBar-DnQzXKKa.js";import"./Label-B5AW6xg7.js";import"./Hidden-zIyTGZgm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Br_94_1T.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C4dOiegp.js";import"./useFocus-BaUOkNoz.js";import"./useFocusRing-BOQTp4b_.js";import"./useFocusable-BSgkjvKf.js";import"./ContextMenuSection-CYbe8IBJ.js";import"./lib-90ocxLs-.js";import"./Dialog-DUDQW2g7.js";import"./RSPContexts-ByjogFSB.js";import"./OverlayArrow-CQB6hAQJ.js";import"./useControlledState-CfgggjdY.js";import"./Collection-D4FMjQ2t.js";import"./CollectionBuilder-CqiHWup6.js";import"./SelectionIndicator-BAdp0X2f.js";import"./Separator-BITuXniK.js";import"./SelectionManager-DVNQ1E_K.js";import"./useEvent-I95ZQAll.js";import"./useCollator-DB2PW37J.js";import"./FocusScope-BWn7UZVq.js";import"./VisuallyHidden-BevTIdSp.js";import"./getActionGroupSlot-DiF9Ne2F.js";import"./useStatic-tA9-ZYDd.js";import"./context-BZ5WwvCq.js";import"./useFieldComponent-B2EVEjTj.js";import"./useFilter-BQ308ptE.js";import"./useOverlayController-CZleQSK6.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-KWYLrW2_.js";import"./FieldDescription-WN9h5Djj.js";import"./TextField-BPUY2Bu_.js";import"./FieldError-C0DtTLwc.js";import"./Form-C5YY3R3J.js";import"./Group-CDE79XeV.js";import"./Input-CdWy1INE.js";import"./useTextField-BewiyiMO.js";import"./useFormReset-OFQGg9Qq.js";import"./useFormValidation-CU0n9v2w.js";import"./useControlledHostValueProps-BaDoBa4u.js";import"./Popover-Ckf8prcf.js";import"./OverlayContextProvider-BF32Wl14.js";import"./ListBox-C4eyo4MS.js";import"./DragAndDrop-BxcK75-R.js";import"./inertValue-C1kNNqNV.js";import"./useListState-C59nyHG8.js";import"./IconDanger-DT-iZjBY.js";import"./useRef-2iCe8zXG.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ne={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
