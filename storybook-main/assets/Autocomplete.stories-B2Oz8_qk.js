import{j as r,r as j}from"./iframe-CCgutS5t.js";import{u as d,F as u,t as g,a as h}from"./Form-DxlmCUiG.js";import{B as i}from"./Button-CB_SQlxf.js";import{S as b}from"./Section-xdCGG6Rl.js";import{A as E}from"./ActionGroup-CI83x2Hx.js";import{s as f}from"./Action-BELw5_ca.js";import{A as m}from"./Autocomplete-CsCiNZzV.js";import{L as l}from"./Label-CNIOR_Eh.js";import{T as a}from"./TextField-Dir9K0P7.js";import{O as S}from"./Option-ntZBDAdy.js";import{F as T}from"./useFieldComponent-B36i382k.js";import"./index-nuYtCEEu.js";import"./flowComponent-C78Jb5L6.js";import"./index-h_ilVZmN.js";import"./clsx-B-dksMZM.js";import"./index-Bp2d_id4.js";import"./useLocalizedStringFormatter-BjHcrzpH.js";import"./context-3TjxBBiZ.js";import"./browser-Cx9TdPw4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-BIjPfZ_7.js";import"./Text-C-3mWHEt.js";import"./EmulatedBoldText-BfzgnQm3.js";import"./Text-DSftVrdI.js";import"./utils-N6USVjPQ.js";import"./LoadingSpinner-CbAXLLLD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DxAPDldv.js";import"./ProgressBar-Pqb-SOG6.js";import"./Label-B2_Qc07C.js";import"./Hidden-BtuehT5t.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C2LzTSEt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C_WBS1_H.js";import"./useFocus-qWLnYmls.js";import"./useFocusRing-DetKeZ0w.js";import"./useFocusable-C1wexJX5.js";import"./ContextMenuSection-plAoKvaj.js";import"./Dialog-BFfcJUiM.js";import"./RSPContexts-D8ixlOLf.js";import"./OverlayArrow-D_Aj7zmL.js";import"./useControlledState-C-pLTCEb.js";import"./Collection-DHibalOY.js";import"./CollectionBuilder-BmvqiF6i.js";import"./SelectionIndicator-BSAaVuJo.js";import"./Separator-CdSBB1Je.js";import"./SelectionManager-CyYCav6z.js";import"./useEvent-rTmmTfmz.js";import"./useCollator-Cks0Ndw_.js";import"./FocusScope-1cqgO8JZ.js";import"./VisuallyHidden-upAad0zi.js";import"./dynamic-CnlMxg6J.js";import"./getActionGroupSlot-DHM8pkUy.js";import"./useStatic-MsaSckAb.js";import"./context-_S3VUPKr.js";import"./useOverlayController-DW7fwhRo.js";import"./ReactAriaControlledValueFix-B6glQD59.js";import"./useFilter-EBm-7tKd.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-Ooz-Umfd.js";import"./FieldDescription-BMzB73VC.js";import"./TextField-DQbAWnp4.js";import"./Form-DylZ4hmS.js";import"./Group-nu6L2uF2.js";import"./Input-zWUUR8ko.js";import"./useTextField-Dj-O8CqK.js";import"./useFormReset-C2ixUAq4.js";import"./useFormValidation-DXrwvkVu.js";import"./Popover-CYSy3wGz.js";import"./OverlayContextProvider-zefoD_gg.js";import"./ClearPropsContextView-CYIHyMV-.js";import"./ClearPropsContext-CZ_w58Ag.js";import"./DragAndDrop-DJ1EQNdG.js";import"./inertValue-DY0YnOyR.js";import"./useListState-C-k7VLNU.js";import"./react-children-utilities-DK8cwA_F.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(t="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${t.split("@")[0]}@${e}`;return r.jsx(S,{value:o,textValue:o,children:o},o)}),zr={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const t=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),o=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(o,{name:"email",children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:t=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),r.jsx(T,{children:"ErrorFromOuterFieldError!"}),c(o)]})]})}},p={render:t=>{const e=d(),o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,Jr as __namedExportsOrder,zr as default};
