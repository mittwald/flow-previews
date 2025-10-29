import{j as r,r as j}from"./iframe-M-00ByYr.js";import{u as d,F as u,t as g,a as h}from"./Form-CCjzRfYD.js";import{B as i}from"./Button-Dye8aZJo.js";import{S as b}from"./Section-DxqiSUr-.js";import{A as E}from"./ActionGroup-DCfNsL7U.js";import{s as f}from"./Action-C6LgLFNM.js";import{A as m}from"./Autocomplete-c2Gkfw-U.js";import{L as l}from"./Label-DT1JZy6g.js";import{T as a}from"./TextField-G5m3m3PG.js";import{O as S}from"./Option-CYdxFENv.js";import{F as T}from"./FieldError-ZwGpCE6l.js";import"./index-nuYtCEEu.js";import"./dynamic-COr1kucW.js";import"./flowComponent-BSbRS4dW.js";import"./index-XTNpKnK3.js";import"./clsx-B-dksMZM.js";import"./index-DpE53F72.js";import"./useLocalizedStringFormatter-DHEdj6fH.js";import"./context-rdrdo5ux.js";import"./browser-DuQo-X1z.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-BKX4jvdo.js";import"./Text-Bt5YA1vc.js";import"./EmulatedBoldText-DX0gJz_T.js";import"./Text-C64HrAr0.js";import"./utils-CzeOq9Jp.js";import"./LoadingSpinner-C8vasHPM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bzi92yWx.js";import"./ProgressBar-DVuQf1Yw.js";import"./Label-2I2h4DuH.js";import"./Hidden-CcUUSr-p.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BqXrfkQs.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ZYaxT06h.js";import"./useFocus-kTKNfC8f.js";import"./useFocusRing-BCZu56W_.js";import"./useFocusable-Ck0hOZfS.js";import"./ContextMenuSection-BEo2Wf2L.js";import"./Dialog-DLSokgtV.js";import"./RSPContexts-D5gF1Lon.js";import"./OverlayArrow-Z3BG-VYq.js";import"./useControlledState-Cpz-s1gG.js";import"./Collection-BNL1juni.js";import"./CollectionBuilder-D-4RKEgn.js";import"./SelectionIndicator-BTUqWRGF.js";import"./Separator-Dlgp_N-b.js";import"./SelectionManager-Dz9bx785.js";import"./useEvent-T5REI5lf.js";import"./useCollator-8xZktG2C.js";import"./FocusScope-CO5umuzV.js";import"./VisuallyHidden-DGulPIzL.js";import"./getActionGroupSlot-DWIZQCXc.js";import"./useStatic-B0qB2N-4.js";import"./context-DSFC_3Cq.js";import"./Popover-CbhBxO6C.js";import"./OverlayContextProvider-B3ZYORx9.js";import"./ClearPropsContextView-DOVoKx0-.js";import"./ClearPropsContext-DvyDrnsG.js";import"./ReactAriaControlledValueFix-Cd1cyM2V.js";import"./useFieldComponent-CRgHa0Rs.js";import"./useFilter-EAalwUJr.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-BdwOCJSd.js";import"./FieldDescription-70lNmvry.js";import"./TextField-DNJxyyXd.js";import"./Form-B5fCCfio.js";import"./Group-Dk159ZYr.js";import"./Input-CPscax3_.js";import"./useTextField-CKTQn_AI.js";import"./useFormReset-B1z61k1U.js";import"./useFormValidation-Co3-d3Vs.js";import"./DragAndDrop-smZ2omtM.js";import"./inertValue-BDtsqEi2.js";import"./useListState-qEeAXJgF.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(t="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${t.split("@")[0]}@${e}`;return r.jsx(S,{value:o,textValue:o,children:o},o)}),Yr={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const t=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),o=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(o,{name:"email",children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:t=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),r.jsx(T,{children:"ErrorFromOuterFieldError!"}),c(o)]})]})}},p={render:t=>{const e=d(),o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Autocomplete {...props} isInvalid>
          <TextField>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,zr as __namedExportsOrder,Yr as default};
