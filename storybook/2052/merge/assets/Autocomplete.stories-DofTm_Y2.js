import{j as r,r as O}from"./iframe-CuPb25cv.js";import{u as d,F as u,t as w,a as y}from"./Form-D3dPEjiA.js";import{B as i}from"./Button-Cy_FSVpl.js";import{S as L}from"./Section-B55_57D7.js";import{A as V}from"./ActionGroup-BCzfYI9o.js";import{s as f}from"./Action-CE7P3CGA.js";import{A as m}from"./Autocomplete-BCHZEuK3.js";import{L as l}from"./Label-BZpLTozc.js";import{T as a}from"./TextField-CEKhlDpO.js";import{O as _}from"./Option--7gKcdSy.js";import{F as v}from"./useFieldComponent-D7Smil9s.js";import"./index-Cun1SEai.js";import"./flowComponent-7fMtXNgu.js";import"./index-CslL-pQh.js";import"./clsx-B-dksMZM.js";import"./index-DkEiVX-f.js";import"./Text-2_ekHeae.js";import"./browser-1QXSrBs6.js";import"./EmulatedBoldText-aijrrTX2.js";import"./Text-DqFBqxgU.js";import"./utils-rjde634_.js";import"./useLocalizedStringFormatter-C6GTeGHr.js";import"./context-Cf_eXnNJ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-CLSl9yKt.js";import"./LoadingSpinner-BlCTpLFY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DVhMN4v1.js";import"./ProgressBar-CiugOVQS.js";import"./Label-B7k3ity1.js";import"./Hidden-CG2yJe_k.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BpP9sX_8.js";import"./useFocus-Cts5O1ED.js";import"./useFocusRing-rCVkEzcT.js";import"./useFocusable-CMpHMgWZ.js";import"./ContextMenuSection-D_Ue6SpG.js";import"./Dialog-CfTpgVgc.js";import"./RSPContexts-xO1N3or9.js";import"./OverlayArrow-iWeFoukr.js";import"./useControlledState-zpPREGnC.js";import"./Collection-CNWEIWZq.js";import"./CollectionBuilder-Dw6bvv_r.js";import"./SelectionIndicator-H-x2PvD-.js";import"./Separator-DV0TabKR.js";import"./SelectionManager-mI79mw48.js";import"./useEvent-BuJ7ERaN.js";import"./useCollator-D4PCkYMI.js";import"./FocusScope-Dlp3dq5q.js";import"./VisuallyHidden-CoDyqh9l.js";import"./dynamic-CGQ0FoZ_.js";import"./getActionGroupSlot-DZJjgnxC.js";import"./useStatic-BfPJwRSw.js";import"./context-B692btnM.js";import"./useOverlayController-BcI7ttWx.js";import"./ReactAriaControlledValueFix-DRH_PgL6.js";import"./useFilter-D2aBkU_n.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-Cpr2rxOi.js";import"./FieldDescription-C0wUj9vw.js";import"./TextField-D8WUfi5z.js";import"./Form-BCVzxl1k.js";import"./Group-CwH8Xmuc.js";import"./Input-DxrKJDZ_.js";import"./useTextField-459gVrKP.js";import"./useFormReset-Cj0hiSlt.js";import"./useFormValidation-DUD5vlRz.js";import"./Popover-DSazfz_3.js";import"./OverlayContextProvider-yb4dqhDz.js";import"./ClearPropsContextView-B81Rbv-y.js";import"./ClearPropsContext-1rzIpp4D.js";import"./DragAndDrop-BjsDCKj4.js";import"./inertValue-CUIHpVM9.js";import"./useListState-BR4nNBNA.js";import"./react-children-utilities-OY5o0O78.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,q=P("submit"),c=(t="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${t.split("@")[0]}@${e}`;return r.jsx(_,{value:o,textValue:o,children:o},o)}),te={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const t=async B=>{await f(1500),q(B)},e=d({defaultValues:{email:""}}),o=w(),A=e.watch("email");return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(L,{children:[r.jsx(o,{name:"email",children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(A)]})}),r.jsxs(V,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:t=>{const e=d();O.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(y,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),r.jsx(v,{children:"ErrorFromOuterFieldError!"}),c(o)]})]})}},p={render:t=>{const e=d(),o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(y,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var h,F,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(F=s.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var j,g,b;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
