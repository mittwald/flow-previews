import{j as r,r as j}from"./iframe-Bju5tM19.js";import{u as d,F as u,t as g,a as h}from"./Form-CXrEODVR.js";import{B as i}from"./Button-D01G-2Tc.js";import{S as b}from"./Section-DCM0ThIe.js";import{A as E}from"./ActionGroup-CNNzqPnn.js";import{s as f}from"./Action-DGXz3yuy.js";import{A as m}from"./Autocomplete-DMYFhP1l.js";import{L as l}from"./Label-CEBawMgO.js";import{T as a}from"./TextField-BDOD9_xn.js";import{O as S}from"./Option-C0we6gaB.js";import{F as T}from"./useFieldComponent-SvMgnfSt.js";import"./index-nuYtCEEu.js";import"./flowComponent-DMQ923EN.js";import"./index-i9t6c7d2.js";import"./clsx-B-dksMZM.js";import"./index-v7jxlCcy.js";import"./useLocalizedStringFormatter-DnEVwgqU.js";import"./context-BCZfssJF.js";import"./browser-5LoYBPX6.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-EseH3oBy.js";import"./Text-Ctwf1INQ.js";import"./EmulatedBoldText-DNLnXqQA.js";import"./Text-X0smrbMM.js";import"./utils-CHaPYnRu.js";import"./LoadingSpinner-OWtFn1Ti.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dw5yhw5U.js";import"./ProgressBar-Bd2c_dqs.js";import"./Label-C0LDEu9P.js";import"./Hidden-B3KlSyIs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DxvdaVYE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DNUm2pP-.js";import"./useFocus-dnpNkUeL.js";import"./useFocusRing-DQLm4Rj_.js";import"./useFocusable-S-EY4exA.js";import"./ContextMenuSection-D4oqZzWw.js";import"./Dialog-BwAIy3cs.js";import"./RSPContexts-CuZAMKB6.js";import"./OverlayArrow-CkGx3q47.js";import"./useControlledState-BiPn7KDX.js";import"./Collection-CzETdAyj.js";import"./CollectionBuilder-C9Q_qjob.js";import"./SelectionIndicator-BWLjQ8Kg.js";import"./Separator-F1osFFu3.js";import"./SelectionManager-BWZTcbb9.js";import"./useEvent-B0Z9j7Hl.js";import"./useCollator-CPsP6oXT.js";import"./FocusScope-BvTlMNTx.js";import"./VisuallyHidden-muGwU-w1.js";import"./dynamic-KamcoLNc.js";import"./getActionGroupSlot-BFuFDZVU.js";import"./useStatic-Dhn4vIeo.js";import"./context-DoYyNt70.js";import"./useOverlayController-rptj0Un2.js";import"./ReactAriaControlledValueFix-BPXa8wTf.js";import"./useFilter-BSOLE07b.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-BtBqEQ7k.js";import"./FieldDescription-BYoVcIgt.js";import"./TextField-DqSp9-m6.js";import"./Form-CawbhIR_.js";import"./Group-CMnMCMaj.js";import"./Input-Cn0b8SON.js";import"./useTextField-BXTJR5Zn.js";import"./useFormReset-CYS5QNbo.js";import"./useFormValidation-Cc6rboKS.js";import"./Popover-DlqNLSeP.js";import"./OverlayContextProvider-BSx-P-EI.js";import"./ClearPropsContextView-D7P4GTdz.js";import"./ClearPropsContext-nVrOsFhk.js";import"./DragAndDrop-DJWBfpcL.js";import"./inertValue--T43CPt4.js";import"./useListState-DJD176iZ.js";import"./react-children-utilities-CV_3FZ2O.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(t="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${t.split("@")[0]}@${e}`;return r.jsx(S,{value:o,textValue:o,children:o},o)}),zr={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const t=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),o=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(o,{name:"email",children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:t=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),r.jsx(T,{children:"ErrorFromOuterFieldError!"}),c(o)]})]})}},p={render:t=>{const e=d(),o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
