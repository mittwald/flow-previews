import{j as r,r as g}from"./iframe-Du65Ph_c.js";import{u as c,F as d,t as b,b as h}from"./Form-B3SdpJl2.js";import{R as F,S as x}from"./ResetButton-16xJCuRV.js";import{B as f}from"./Button-2wmaPnFC.js";import{S as E}from"./Section-CmcN9Eur.js";import{A as T}from"./ActionGroup-CUUirHEC.js";import{s as u}from"./Action-BMmoeCN3.js";import{A as i}from"./Autocomplete-o189nCi6.js";import{L as p}from"./Label-BClS0qAd.js";import{T as l}from"./TextField-D9BBBaWE.js";import{O as B}from"./Option-LSMITr5k.js";import{F as A}from"./FieldError-VBXyMAIR.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CtEU0XPC.js";import"./flowComponent-CYbHZhXg.js";import"./index-XI88kJrR.js";import"./clsx-B-dksMZM.js";import"./index-c0t27COx.js";import"./useLocalizedStringFormatter-Dhvhyrh1.js";import"./context-BMDcuGwa.js";import"./browser-57tL9X_d.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-xIJEb5Gc.js";import"./useRef-DEleeR3P.js";import"./IconWarning-CGSd0Gik.js";import"./remote-D3fYDNUY.js";import"./Text-CtX5enn3.js";import"./EmulatedBoldText-CITvecLd.js";import"./Text-Cl831mKA.js";import"./LoadingSpinner-DEfGApvw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CjwwJrCh.js";import"./ProgressBar-B4qFtVbo.js";import"./Label-D_GXaE34.js";import"./Hidden-BV9iY75y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BdNff0XI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyOin5iy.js";import"./useFocus-mAbeDdRN.js";import"./useFocusRing-B7cLewIC.js";import"./useFocusable-RoNPbAVl.js";import"./ContextMenuSection-Dk6jrzXb.js";import"./Dialog-BO9iihOE.js";import"./RSPContexts-CGKyxyrO.js";import"./OverlayArrow-CbRWYOrW.js";import"./useControlledState-Cdt3oZ6_.js";import"./Collection-C5ltbjdX.js";import"./CollectionBuilder-d6KQwCFJ.js";import"./SelectionIndicator-Cb43LM7W.js";import"./Separator-DKPq8LUH.js";import"./SelectionManager-BR7dbQPM.js";import"./useEvent-D0wfQKUV.js";import"./useCollator-DYYkh59M.js";import"./FocusScope-DUOtKQcD.js";import"./VisuallyHidden-rhukFLga.js";import"./getActionGroupSlot-BXwxo_QL.js";import"./useStatic-B95N-aRU.js";import"./context-Cb5nHwHn.js";import"./useOverlayController-D5h8n75v.js";import"./useFieldComponent-XbdbUfvB.js";import"./useFilter-DXAwXXny.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-DStMjvfH.js";import"./FieldDescription-PWJKvGgj.js";import"./TextField-CT_QddQu.js";import"./FieldError-cRzcLKxU.js";import"./Form-CLANTGFM.js";import"./Group-Bc65Crwm.js";import"./Input-CyqTlZ7V.js";import"./useTextField-D01-3X5s.js";import"./useFormReset-D830YkJ7.js";import"./useFormValidation-DAWFGl74.js";import"./useControlledHostValueProps-BIH1ZGPM.js";import"./Popover-a0_blwO0.js";import"./OverlayContextProvider-CsKpo_xf.js";import"./ListBox-OOTqJwA3.js";import"./DragAndDrop-Dmfpv_uk.js";import"./inertValue-DnwZhDci.js";import"./useListState-D43ypxU7.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
