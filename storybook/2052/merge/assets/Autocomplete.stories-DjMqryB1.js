import{j as r,r as O}from"./iframe-BojHUq_o.js";import{u as d,F as u,t as w,a as y}from"./Form-DiL5IjUK.js";import{B as i}from"./Button-Dx72WFTb.js";import{S as L}from"./Section-DKmaai8j.js";import{A as V}from"./ActionGroup-htEV1_ZT.js";import{s as f}from"./Action-BzhIxFNp.js";import{A as m}from"./Autocomplete-CThtG5F6.js";import{L as l}from"./Label-DZ-kvQ_z.js";import{T as a}from"./TextField-zjdKNq_D.js";import{O as _}from"./Option-DeI2FWOF.js";import{F as v}from"./useFieldComponent-DC978Re4.js";import"./index-Cun1SEai.js";import"./flowComponent-T2-wi8uX.js";import"./index-BJZZiC-7.js";import"./clsx-B-dksMZM.js";import"./index-Byu2kyB2.js";import"./Text-HCLVlkvP.js";import"./browser-DnzQTrak.js";import"./EmulatedBoldText-B_edXnF6.js";import"./Text-BOOhOnJG.js";import"./utils-Gx6YrarE.js";import"./useLocalizedStringFormatter-69wcReOi.js";import"./context-BrPX2Q0J.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-CDe5PPLT.js";import"./LoadingSpinner-C6E-2u5d.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DcusG6ul.js";import"./ProgressBar-Ba8rhXoO.js";import"./Label-kTT31z_U.js";import"./Hidden-ZJfagMAU.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B7zZe8uM.js";import"./useFocus-C9Jl_mjq.js";import"./useFocusRing-PQu2duny.js";import"./useFocusable-BokWW085.js";import"./ContextMenuSection-CjxVZXwg.js";import"./Dialog-MdAsc9jB.js";import"./RSPContexts-4pkCpc5X.js";import"./OverlayArrow-OKVkdbLV.js";import"./useControlledState-goB9hidZ.js";import"./Collection-BfuTuT0s.js";import"./CollectionBuilder-D8Vcy0X7.js";import"./SelectionIndicator-IBXNysdl.js";import"./Separator-B6WcJaDG.js";import"./SelectionManager-DxBzATix.js";import"./useEvent-DG1kacar.js";import"./useCollator-Chx17-X6.js";import"./FocusScope-YAVoTg22.js";import"./VisuallyHidden-BBfPbX8D.js";import"./dynamic-SDISKgE-.js";import"./getActionGroupSlot-D49HjIN5.js";import"./useStatic-CZJ_DwPf.js";import"./context-awqjHi2S.js";import"./useOverlayController-BsFtumxo.js";import"./ReactAriaControlledValueFix-BGBOVb49.js";import"./useFilter-Cb5Si64X.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-CsoMj4av.js";import"./FieldDescription-DQnyyCo1.js";import"./TextField-Bwv7dyz6.js";import"./Form-CWB6L6R3.js";import"./Group-D8Hf8MQ4.js";import"./Input-ldVtEAcy.js";import"./useTextField-RpbQmuLZ.js";import"./useFormReset-DOCiYQU_.js";import"./useFormValidation-Q_otrioy.js";import"./Popover-DDed5Fp-.js";import"./OverlayContextProvider-UPAUECdU.js";import"./ClearPropsContextView-CWOgNtlO.js";import"./ClearPropsContext-CDRCLX7w.js";import"./DragAndDrop-D3lHVMyJ.js";import"./inertValue-ji95Mfzl.js";import"./useListState-Dx2SS8cl.js";import"./react-children-utilities-M78AEMQD.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,q=P("submit"),c=(t="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${t.split("@")[0]}@${e}`;return r.jsx(_,{value:o,textValue:o,children:o},o)}),te={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const t=async B=>{await f(1500),q(B)},e=d({defaultValues:{email:""}}),o=w(),A=e.watch("email");return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(L,{children:[r.jsx(o,{name:"email",children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(A)]})}),r.jsxs(V,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:t=>{const e=d();O.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(y,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),r.jsx(v,{children:"ErrorFromOuterFieldError!"}),c(o)]})]})}},p={render:t=>{const e=d(),o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(y,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var h,F,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(F=s.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var j,g,b;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var E,S,T;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(S=p.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const ie=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,ie as __namedExportsOrder,te as default};
