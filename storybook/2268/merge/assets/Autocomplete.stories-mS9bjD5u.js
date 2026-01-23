import{j as r,r as g}from"./iframe-iY_Mn_oy.js";import{u as c,F as d,t as b,b as h}from"./Form-BNcFjNMX.js";import{R as F,S as x}from"./ResetButton-BUk85j1K.js";import{B as f}from"./Button-BXdn408E.js";import{S as E}from"./Section-CuJxl25L.js";import{A as T}from"./ActionGroup-pEn2FCmY.js";import{s as u}from"./Action-iMWR4bsW.js";import{A as i}from"./Autocomplete-BD3O_O0h.js";import{L as p}from"./Label-3EuxSz5j.js";import{T as l}from"./TextField-C9CBZGEn.js";import{O as B}from"./Option-5uZ9pSym.js";import{F as A}from"./FieldError-rrdHjYdT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CDOrKiJc.js";import"./flowComponent-DM--TRa4.js";import"./index-BDAsCxdA.js";import"./clsx-B-dksMZM.js";import"./index-IKthRYIx.js";import"./useLocalizedStringFormatter-DmQ_f8mX.js";import"./context-DIbVk5_z.js";import"./browser-DK9hE6UN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-C-pMCGM-.js";import"./useRef-BXSpDy4V.js";import"./IconWarning-B803z1sh.js";import"./remote-CIrN4__o.js";import"./Text-C2ZCo6gl.js";import"./EmulatedBoldText-CHIJjbeg.js";import"./Text-CktBEW1F.js";import"./LoadingSpinner-C14k5CPB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BELa7hv8.js";import"./ProgressBar-DKU-k64e.js";import"./Label-DWRUfm9N.js";import"./Hidden-BMoxskLs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8EVB-03H.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B5dXj1sU.js";import"./useFocus-Nxno6ZgW.js";import"./useFocusRing-BNNZSKMh.js";import"./useFocusable-Bi19l3La.js";import"./ContextMenuSection-DufqnfrN.js";import"./Dialog-BSCAVunC.js";import"./RSPContexts-CRnPLFal.js";import"./OverlayArrow-KAH5W0sM.js";import"./useControlledState-DUH-ni6I.js";import"./Collection-p0j0j4rV.js";import"./CollectionBuilder-CBi7m5Jq.js";import"./SelectionIndicator-C9Y7msNP.js";import"./Separator-DvCWPy9d.js";import"./SelectionManager-jr_LZpLG.js";import"./useEvent-BHEixncs.js";import"./useCollator-Daexx-65.js";import"./FocusScope-Crvk_gLu.js";import"./VisuallyHidden-DEFkQEyo.js";import"./getActionGroupSlot-DnzDvT0Q.js";import"./useStatic-BNEy2A13.js";import"./context-AuWKQf6d.js";import"./useOverlayController-B66mlXsj.js";import"./useFieldComponent-Cxjop7r-.js";import"./useFilter-Jbj4hJRH.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-BOaLW-DS.js";import"./FieldDescription-DHPoAUPt.js";import"./TextField-I3iQ5THw.js";import"./FieldError-BP_EVNQV.js";import"./Form-2TpMp3Y3.js";import"./Group-CDmjKrYo.js";import"./Input-B3denzrL.js";import"./useTextField-BqkIOSVN.js";import"./useFormReset-DJj-QXR5.js";import"./useFormValidation-B6OmY3vR.js";import"./useControlledHostValueProps-7A2CJ7V9.js";import"./Popover-CTmqafGM.js";import"./OverlayContextProvider-CEfkP99K.js";import"./ListBox-3Ku6mi1P.js";import"./DragAndDrop-B8ermCeP.js";import"./inertValue-txSBffTV.js";import"./useListState-C0CEYWLb.js";import"./AlertText-BLXtcQ-I.js";import"./AlertIcon-Dw605mNU.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),te={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
