import{j as r,r as g}from"./iframe-nlVW-CPZ.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-C0RVFwP1.js";import{B as f}from"./Button-_Sn69Jgj.js";import{S as E}from"./Section-BCmWc09Q.js";import{A as T}from"./ActionGroup-CaBABiHS.js";import{s as u}from"./Action-VhJyCQWd.js";import{A as i}from"./Autocomplete-CZQl8yYw.js";import{L as p}from"./Label-BuWy1qrT.js";import{T as l}from"./TextField-CAVZM0Px.js";import{O as B}from"./Option-BfA0WRLH.js";import{F as A}from"./FieldError-C-5FG0Dy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dsm5lbml.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./clsx-B-dksMZM.js";import"./index-DrBjklCk.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./context-CIGB7i0H.js";import"./useRef-CfQO_nnJ.js";import"./utils-CyuEFqip.js";import"./ButtonView-CLlJ09F8.js";import"./browser-BoEfPalF.js";import"./IconWarning-VZ7ITFqu.js";import"./remote-D3GclicH.js";import"./Text-BzuDjaz9.js";import"./EmulatedBoldText-DYHVi4jR.js";import"./Text-sEy-KTn9.js";import"./LoadingSpinner-X7Xu_AAn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BXbNlZWB.js";import"./ProgressBar-CIT85dGK.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUbax7la.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BSHzPeES.js";import"./useFocus-CD1ZzMvo.js";import"./useFocusRing-0Z36i33d.js";import"./useFocusable-DHxyzauV.js";import"./ContextMenuSection-mf_2MmNA.js";import"./Dialog-zXGOOBEm.js";import"./RSPContexts-DlUCcPRc.js";import"./OverlayArrow-xJgx9UYQ.js";import"./useControlledState-ywoEmBU4.js";import"./Collection-VsHvURZ5.js";import"./CollectionBuilder-BC18ROL9.js";import"./SelectionIndicator-DdhOYUUY.js";import"./Separator-Ei4AiFvo.js";import"./SelectionManager-BMKEE2dl.js";import"./useEvent-C_UmhbA0.js";import"./useCollator-CE-FIC6l.js";import"./FocusScope-DihhZg9P.js";import"./VisuallyHidden-44O2XzGD.js";import"./getActionGroupSlot-C4UrWJhX.js";import"./useStatic-C5UephlJ.js";import"./context-DJb9q1Xr.js";import"./useOverlayController-52PC3yWy.js";import"./useFieldComponent-DOzg870F.js";import"./useFilter-Ck5hSm9r.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-C--TiKRF.js";import"./FieldDescription-a2tRS2_K.js";import"./TextField-D0tY8Qlz.js";import"./FieldError-BpjEpOFY.js";import"./Form-DSPAlIu9.js";import"./Group-w-lYdjjN.js";import"./Input-BlMpicf_.js";import"./useTextField-C4USa82P.js";import"./useFormReset-J8eUPjf8.js";import"./useFormValidation-DqSMo-uw.js";import"./Popover-D2O_yi7O.js";import"./OverlayContextProvider-CMO4Tng6.js";import"./ListBox-DQWGitWY.js";import"./DragAndDrop-3omjgSqM.js";import"./inertValue-7p_JatCC.js";import"./useListState-C1B6CZBi.js";import"./AlertText-tAApf57I.js";import"./AlertIcon-Dr5phtoY.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
