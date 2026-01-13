import{j as r,r as g}from"./iframe-DoM-BIwg.js";import{u as c,F as d,t as b,b as h}from"./Form-B5Pnwm63.js";import{R as F,S as x}from"./ResetButton-albeSaC2.js";import{B as f}from"./Button-CT5Y8uWS.js";import{S as E}from"./Section-CRx22udC.js";import{A as T}from"./ActionGroup-Bn43YAdA.js";import{s as u}from"./Action-KkrISRwO.js";import{A as i}from"./Autocomplete-BdK23bbK.js";import{L as p}from"./Label-BFVzgZLR.js";import{T as l}from"./TextField-dQAqJdaj.js";import{O as B}from"./Option-DdmrIn60.js";import{F as A}from"./FieldError-D1hjQVoV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CkeXur7S.js";import"./flowComponent-Bw05Ss5u.js";import"./index-B9vDCLP1.js";import"./clsx-B-dksMZM.js";import"./index-BXuzzWnK.js";import"./useLocalizedStringFormatter-BiPCXUs5.js";import"./context-CSqA08Z3.js";import"./browser-COZAGKbB.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-D5il_mPj.js";import"./useRef-zKWnsD4B.js";import"./IconWarning-BD_MiEVG.js";import"./remote-BDffDiLd.js";import"./Text-lsEUOuuk.js";import"./EmulatedBoldText-DPZf3ZEq.js";import"./Text-CiXcXSql.js";import"./LoadingSpinner-CPr3D27j.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BXmw0khj.js";import"./ProgressBar-BJTn-fHy.js";import"./Label-DE9HqL8_.js";import"./Hidden-DgtxAirB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cp7FQmHU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-v4r7x8aW.js";import"./useFocus-ClxCJYgX.js";import"./useFocusRing-Bar7hbU_.js";import"./useFocusable-Cy5CQHPW.js";import"./ContextMenuSection-fUiEQtti.js";import"./Dialog-BESdyj17.js";import"./RSPContexts-BpmX7ICR.js";import"./OverlayArrow-Di4XgwVw.js";import"./useControlledState--GEywRyg.js";import"./Collection-BU4jsGpu.js";import"./CollectionBuilder-DJn4hq3P.js";import"./SelectionIndicator-D4zCj7sf.js";import"./Separator-nJ0RJQXk.js";import"./SelectionManager-6w1Kk-2_.js";import"./useEvent-8dtJi2Bo.js";import"./useCollator-DkqZ4sPc.js";import"./FocusScope-DbX1j6h6.js";import"./VisuallyHidden-GPtOnQVg.js";import"./getActionGroupSlot-CjJPVShT.js";import"./useStatic-BCI8JZji.js";import"./context-DP2lyaT2.js";import"./useOverlayController-DJQxd8wz.js";import"./useFieldComponent-CZ4YFclL.js";import"./useFilter-D_K5jCWA.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-C0uf3Bse.js";import"./FieldDescription-D7t9gDEh.js";import"./TextField-CF9DJvmP.js";import"./FieldError-CHU7gQK7.js";import"./Form-BRbECj4N.js";import"./Group-B6Ij3cqY.js";import"./Input-V-OR_KLg.js";import"./useTextField-BHoBVWF_.js";import"./useFormReset-DsbUUfuN.js";import"./useFormValidation-lvugQbRf.js";import"./useControlledHostValueProps-DSNqmJy9.js";import"./Popover-Cl8R87oW.js";import"./OverlayContextProvider-Evthga4H.js";import"./ListBox-C6VpwbBd.js";import"./DragAndDrop-N-24b2Po.js";import"./inertValue-zIphvWQi.js";import"./useListState-CqvlOXXn.js";import"./AlertText-DEPqS5ry.js";import"./AlertIcon-Mg7Q3zgv.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),te={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const oe=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,oe as __namedExportsOrder,te as default};
