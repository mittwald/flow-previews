import{r as g,j as r}from"./iframe-CNIcTJYh.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-B90bKA5P.js";import{B as f}from"./Button-DAjUCwya.js";import{S as E}from"./Section-CUzAZq5T.js";import{A as T}from"./ActionGroup-DwraTk7X.js";import{s as u}from"./Action-CB-yo4he.js";import{A as i}from"./Autocomplete-BHUxxy3x.js";import{L as p}from"./Label-Dk1BsiHf.js";import{T as l}from"./TextField-D_qeRFW4.js";import{O as B}from"./Option-BUOaqC-_.js";import{F as A}from"./FieldError-CRJL1-ZW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfddFL0U.js";import"./flowComponent-60nesrge.js";import"./index-D3p32_5k.js";import"./clsx-B-dksMZM.js";import"./index-UhPRO7XN.js";import"./useLocalizedStringFormatter-Rr_25XDQ.js";import"./context-C-_0n7Mf.js";import"./useRef-DPaH8BEG.js";import"./utils-BMrW0rs-.js";import"./ButtonView-f9GsubAG.js";import"./browser-e5gpn1Ib.js";import"./IconWarning-DfNRCo5R.js";import"./remote-yIvwWX6j.js";import"./Text-6t0QtAeQ.js";import"./EmulatedBoldText-Cp_XieAh.js";import"./Text-D2vn8IUC.js";import"./LoadingSpinner-D1M8B3tV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BxwMmJez.js";import"./ProgressBar-2k-c3px2.js";import"./Label-T_N4SAco.js";import"./Hidden-CRwhep7p.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-OR8aG57O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-YapnYrtx.js";import"./useFocus-Z0zsAUPg.js";import"./useFocusRing-DW-rJUC8.js";import"./useFocusable-pw23kKVy.js";import"./ContextMenuSection-B2n1IDtN.js";import"./Dialog-C8--keRD.js";import"./RSPContexts-BRYZfydm.js";import"./OverlayArrow-CaHszdLs.js";import"./useControlledState-aVbBpOCK.js";import"./Collection-6jPaJgDf.js";import"./CollectionBuilder-CrJHEyTa.js";import"./SelectionIndicator-DvRn40OS.js";import"./Separator-YE45c4qp.js";import"./SelectionManager-DzzIj92U.js";import"./useEvent-BbgFwTon.js";import"./useCollator-BvOIfxes.js";import"./FocusScope-BYGRF7Vw.js";import"./VisuallyHidden-BJLw9ne3.js";import"./getActionGroupSlot-BroJtED_.js";import"./useStatic-J4GDP0vf.js";import"./context-CHGIk6I_.js";import"./useOverlayController-DAzTf57J.js";import"./useFieldComponent-BcSx3cQM.js";import"./useFilter-W9Q2TcsB.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-CCy3mJ8p.js";import"./FieldDescription-D4T9Jptd.js";import"./TextField-BlWPRgiP.js";import"./FieldError-C-WtBUhj.js";import"./Form-DFzq_6cf.js";import"./Group-B3nGsmaJ.js";import"./Input-DXXfkxpG.js";import"./useTextField-DUQ7sCSl.js";import"./useFormReset-ClGEeDTe.js";import"./useFormValidation-Cl_ELzYY.js";import"./Popover-DmppkICQ.js";import"./OverlayContextProvider-DLVotmKz.js";import"./ListBox-Ds3bJK6i.js";import"./DragAndDrop-B1ITiGw7.js";import"./inertValue-DXMqYHu9.js";import"./useListState-BZgaHMy4.js";import"./AlertText-C0QdtU2r.js";import"./AlertIcon-CQAKF3sa.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
