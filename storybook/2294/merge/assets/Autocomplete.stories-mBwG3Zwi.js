import{j as r,r as g}from"./iframe-CvJspzLv.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-DDmmyPg8.js";import{B as f}from"./Button-DPWvzJXv.js";import{S as E}from"./Section-DrXtyJcE.js";import{A as T}from"./ActionGroup-DsNPEUIc.js";import{s as u}from"./Action-CzgX1dLD.js";import{A as i}from"./Autocomplete-Dc6YeLUZ.js";import{L as p}from"./Label-DfZOYrgY.js";import{T as l}from"./TextField-D890uTHI.js";import{O as B}from"./Option-Iu7OJsh-.js";import{F as A}from"./FieldError-DQmh2MYp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-7-1UCAS5.js";import"./flowComponent-BI37IbCZ.js";import"./index-FNnc6AUb.js";import"./clsx-B-dksMZM.js";import"./index-Df150GVy.js";import"./useLocalizedStringFormatter-Clgc-XTf.js";import"./context-CQ77Qkvg.js";import"./useRef-eAOD_JRC.js";import"./utils-BL4G7l_u.js";import"./useOverlayController-BI0XpmO3.js";import"./context-KW9IbNQ1.js";import"./useStatic-B0ICfBk6.js";import"./ButtonView-ClFFq5XN.js";import"./browser-CBUTrPGa.js";import"./IconWarning-BERZaob7.js";import"./remote-BqqZGE8h.js";import"./Text-QUQe3Lsq.js";import"./EmulatedBoldText-DGmAuSbD.js";import"./Text-DHLl2ajF.js";import"./LoadingSpinner-xAaU4yCn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DpFh2ewL.js";import"./ProgressBar-CM3jPvpy.js";import"./Label-BqmnG06H.js";import"./Hidden-Cc0JeUT8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfL38sGR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DO5nHrqL.js";import"./useFocus-DbFf9Ktc.js";import"./useFocusRing-L-b3Tn9K.js";import"./useFocusable-C5zGZvV-.js";import"./ContextMenuSection-B9VXHai8.js";import"./Dialog-CNj22GpD.js";import"./RSPContexts-fR-6qryz.js";import"./OverlayArrow-kevdZy7A.js";import"./useControlledState-DsktkqC9.js";import"./Collection-D9feXgUJ.js";import"./CollectionBuilder-1cHqqndV.js";import"./SelectionIndicator-DujQOkfZ.js";import"./Separator-CwyBo3YQ.js";import"./SelectionManager-S2-bZThJ.js";import"./useEvent-B-O27hsR.js";import"./useCollator-BPc2CQoh.js";import"./FocusScope-BaZaaiNh.js";import"./VisuallyHidden-ksBWJgrQ.js";import"./getActionGroupSlot-DdQssjpq.js";import"./useFieldComponent-43Bszd6x.js";import"./useFilter-CMXydq_D.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-6J4u6VBA.js";import"./FieldDescription-DYsoHdVt.js";import"./TextField-DPOg2TtI.js";import"./FieldError-DlX11YEn.js";import"./Form-5NfLIR8x.js";import"./Group-C7yLTez3.js";import"./Input-qFXimabr.js";import"./useTextField-Bm9nr_bd.js";import"./useFormReset-ukaISav3.js";import"./useFormValidation-CwZe5cTQ.js";import"./useControlledHostValueProps-Cd6juLCH.js";import"./Popover-62VnHh_D.js";import"./OverlayContextProvider-BI-9o36W.js";import"./ListBox-DYmfFN8R.js";import"./DragAndDrop-CwMMTiRZ.js";import"./inertValue-DyqKu7N8.js";import"./useListState-Dn0qlF4d.js";import"./AlertText-DgMbxot0.js";import"./AlertIcon-C15Ckg1B.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ee={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const te=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,te as __namedExportsOrder,ee as default};
