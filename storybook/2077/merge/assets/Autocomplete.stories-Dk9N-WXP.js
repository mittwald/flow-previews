import{j as r,r as j}from"./iframe-B0qqkRSc.js";import{u as d,F as u,t as g,a as h}from"./Form-BuCWVJY1.js";import{B as i}from"./Button-DJYlHg31.js";import{S as b}from"./Section-Dra2DCa6.js";import{A as E}from"./ActionGroup-Cmq5nBXt.js";import{s as f}from"./Action-CH6Q1TZa.js";import{A as m}from"./Autocomplete-N6uUXU_S.js";import{L as l}from"./Label-Bathhgam.js";import{T as a}from"./TextField-CifTHc1k.js";import{O as S}from"./Option-PTfc8bTz.js";import{F as T}from"./useFieldComponent-BdE163vq.js";import"./index-nuYtCEEu.js";import"./flowComponent-D28qUuL_.js";import"./index-Bw7Y8sX9.js";import"./clsx-B-dksMZM.js";import"./index-ByDaWYpT.js";import"./useLocalizedStringFormatter-Hp5e5rkz.js";import"./context-D99v7Uqm.js";import"./browser-B1sj-_-y.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-BPZvpYf1.js";import"./Text-BrTaOrXE.js";import"./EmulatedBoldText-YngYColk.js";import"./Text-Dr_aqSbj.js";import"./utils-fD_u--Rs.js";import"./LoadingSpinner-BhtZJAGg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CBrpY8Iv.js";import"./ProgressBar-COiaV-p2.js";import"./Label-CSbZp_Tl.js";import"./Hidden-B-z-l7Br.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-sSRBc7PO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CRF7-NYn.js";import"./useFocus-D6s77d5g.js";import"./useFocusRing-6YYb42D4.js";import"./useFocusable-BBZGyB5D.js";import"./ContextMenuSection-DodlfDvY.js";import"./Dialog-Cf8VWc4Y.js";import"./RSPContexts-JwdHw2w4.js";import"./OverlayArrow-B0r4AZS0.js";import"./useControlledState-CB1SzgEG.js";import"./Collection-BezXrWUC.js";import"./CollectionBuilder-CyiVnh3g.js";import"./SelectionIndicator-BJvhD4qq.js";import"./Separator-AYUu4xVa.js";import"./SelectionManager-pQfvjsBD.js";import"./useEvent-BB8Na9jU.js";import"./useCollator-D-k20A4-.js";import"./FocusScope-8IhL3Eed.js";import"./VisuallyHidden-CQaNZ-oY.js";import"./dynamic-nZoDMFyL.js";import"./getActionGroupSlot-C0ojBLEj.js";import"./useStatic-CDvxHEcU.js";import"./context-CL6SRMFP.js";import"./useOverlayController-C7cC56ob.js";import"./ReactAriaControlledValueFix-DRAhRQZp.js";import"./useFilter-Db6bXTdq.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-CBLAjS1_.js";import"./FieldDescription-CX2AXiNE.js";import"./TextField-OdvHxJmp.js";import"./Form-Dg4UU0-2.js";import"./Group-n_vUHkH-.js";import"./Input-C6zpuO0N.js";import"./useTextField-23Ik_eMK.js";import"./useFormReset-CSVsou9A.js";import"./useFormValidation-Vh8OxI1q.js";import"./Popover-Ckp0SCPP.js";import"./OverlayContextProvider-DBk643TH.js";import"./ClearPropsContextView-D258LB2U.js";import"./ClearPropsContext-HA28kjj1.js";import"./DragAndDrop-Dq3zGvgW.js";import"./inertValue-opLm6--8.js";import"./useListState-judaE-gJ.js";import"./react-children-utilities-BymZuw_a.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,A=y("submit"),c=(t="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${t.split("@")[0]}@${e}`;return r.jsx(S,{value:o,textValue:o,children:o},o)}),zr={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const t=async x=>{await f(1500),A(x)},e=d({defaultValues:{email:""}}),o=g(),F=e.watch("email");return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(o,{name:"email",children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(F)]})}),r.jsxs(E,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:t=>{const e=d();j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),r.jsx(T,{children:"ErrorFromOuterFieldError!"}),c(o)]})]})}},p={render:t=>{const e=d(),o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
