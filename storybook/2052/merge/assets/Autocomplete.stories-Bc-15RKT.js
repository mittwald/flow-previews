import{j as r,r as O}from"./iframe-CwuqIU3i.js";import{u as d,F as u,t as w,a as y}from"./Form-C_LQ2LWw.js";import{B as i}from"./Button-BqbqUci_.js";import{S as L}from"./Section-LUqPWyIZ.js";import{A as V}from"./ActionGroup-K4almCLG.js";import{s as f}from"./Action-Dz8VIf0X.js";import{A as m}from"./Autocomplete-BLJ3n6DS.js";import{L as l}from"./Label-B0BiyK3O.js";import{T as a}from"./TextField-Bjr-9gsN.js";import{O as _}from"./Option-BYrCMwV0.js";import{F as v}from"./useFieldComponent-eP2W8yne.js";import"./index-Cun1SEai.js";import"./flowComponent-CW5hnf4o.js";import"./index-DCuX0QuH.js";import"./clsx-B-dksMZM.js";import"./index-DdRMNQVP.js";import"./Text-Dbs8GmZM.js";import"./browser-DUGYsxZ_.js";import"./EmulatedBoldText-DuSj7T8w.js";import"./Text-WRK6H0Wn.js";import"./utils-BNUN6Z86.js";import"./useLocalizedStringFormatter-CenpEZM_.js";import"./context-Cr--o0Ww.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-DfuZN-Hc.js";import"./LoadingSpinner-BmjVj-LQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BUhZq-tB.js";import"./ProgressBar-BzO_ljLZ.js";import"./Label-Ds7Yihzi.js";import"./Hidden-AzgHkXqa.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CdaIPuHn.js";import"./useFocus-JEz06IDi.js";import"./useFocusRing-Csjn1IfN.js";import"./useFocusable-CYb_RHOH.js";import"./ContextMenuSection-BU9M0i_t.js";import"./Dialog-BB45Hyg5.js";import"./RSPContexts-BJREWOlr.js";import"./OverlayArrow-DPamNpoY.js";import"./useControlledState-B3_Egg2G.js";import"./Collection-YYfkw6ZM.js";import"./CollectionBuilder-BkgyTACG.js";import"./SelectionIndicator-pORsGxIs.js";import"./Separator-OZJOm_uc.js";import"./SelectionManager-Cunz5w8r.js";import"./useEvent-CWvMBd14.js";import"./useCollator-Vvi4fPh5.js";import"./FocusScope-AJCIL371.js";import"./VisuallyHidden-DO5WoARG.js";import"./dynamic-DTSFzVL0.js";import"./getActionGroupSlot-Bjm84Kbj.js";import"./useStatic-DLE3zC_Y.js";import"./context-B1E32d2Q.js";import"./useOverlayController-B8XIYbgT.js";import"./ReactAriaControlledValueFix-D3IvEHi3.js";import"./useFilter-pt2OluMQ.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-Sy7zspWU.js";import"./FieldDescription-CJ9p1yOe.js";import"./TextField-DH4M0LGG.js";import"./Form-C1wZYKgN.js";import"./Group-OczM-V_0.js";import"./Input-Cwt17kbg.js";import"./useTextField-tXwlexz2.js";import"./useFormReset-BLDFw02N.js";import"./useFormValidation-DK6PIssV.js";import"./Popover-D__JW8z9.js";import"./OverlayContextProvider-97LfiWf0.js";import"./ClearPropsContextView-fXO2DKoU.js";import"./ClearPropsContext-DGTEyAkG.js";import"./DragAndDrop-Cc-zdblB.js";import"./inertValue-3IaE9rnV.js";import"./useListState-C9JuUq7T.js";import"./react-children-utilities-BfKePjVo.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,q=P("submit"),c=(t="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${t.split("@")[0]}@${e}`;return r.jsx(_,{value:o,textValue:o,children:o},o)}),te={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const t=async B=>{await f(1500),q(B)},e=d({defaultValues:{email:""}}),o=w(),A=e.watch("email");return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(L,{children:[r.jsx(o,{name:"email",children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(A)]})}),r.jsxs(V,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:t=>{const e=d();O.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(y,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),r.jsx(v,{children:"ErrorFromOuterFieldError!"}),c(o)]})]})}},p={render:t=>{const e=d(),o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(y,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var h,F,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(F=s.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var j,g,b;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
