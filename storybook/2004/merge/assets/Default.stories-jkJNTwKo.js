import{r as x,j as e}from"./iframe-BN_dfUe_.js";import{F as t}from"./FileDropZone-TErzUPql.js";import{S as u}from"./Section-YRhs5YAy.js";import{F}from"./FileCardList-BHXdsnQA.js";import{F as f}from"./FileCard-BhDYKLJ3.js";import{u as E,F as W,t as G}from"./Form-BJAYt6qk.js";import{B as s}from"./Button-D-C47sqm.js";import{A as M}from"./ActionGroup-D22srrF2.js";import{_ as j,$ as q}from"./IconWarning-DNOLg4j3.js";import{H as g}from"./Heading-C3bMpqRe.js";import{F as h}from"./FileField-Dmo9UCuc.js";import{T as v}from"./Text-DzaqmzRj.js";import"./IllustratedMessage-RemU5Yo2.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BdWjLDJi.js";import"./mergeRefs-upl_BBo9.js";import"./index-C8Ff-wAx.js";import"./utils-B0sx3Kyr.js";import"./intlStrings-ZMTSFH_M.js";import"./Text-Bh7wF6OD.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BVHoyGPi.js";import"./useFocus-BPnQl8Vs.js";import"./useCollator-D4KmbgCM.js";import"./context-dredv6-K.js";import"./useLocalizedStringFormatter-CxEOdw80.js";import"./Button-Df2sUXty.js";import"./ProgressBar-jBCVtiFi.js";import"./Label-DGLQk8oX.js";import"./Hidden-DymlCD5P.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D00Qk3ID.js";import"./useFocusRing-BbyZkAky.js";import"./useFocusable-CjxkNo9x.js";import"./VisuallyHidden-Cv7STolA.js";import"./ContextMenuSection-DopY__n7.js";import"./Action-V_TKCgSi.js";import"./context-DRf69qys.js";import"./useStatic-wsYo6cwd.js";import"./browser-BV7EqxDV.js";import"./getActionGroupSlot-BHB3McHc.js";import"./dynamic-BgZcYaB5.js";import"./Popover-DLER5_Cb.js";import"./DialogTriggerView-nA9ebbIS.js";import"./RSPContexts-D2tN5T2G.js";import"./ClearPropsContextView-DP5aaG59.js";import"./useControlledState-B3OMKOuD.js";import"./FocusScope-DSvKVwGk.js";import"./Collection-BYc3dnT8.js";import"./CollectionBuilder-Eq-dAbBR.js";import"./Separator-DJTsPnLp.js";import"./Group-BVQ5MOmY.js";import"./SearchField-BBPaTZKc.js";import"./FieldError-CIdDbIOg.js";import"./Form-BI9DTP98.js";import"./useTextField-BYi7xCqf.js";import"./useFormReset-DQe0b_9O.js";import"./TextField-BdrHFS2A.js";import"./useEvent-BzG6iyzN.js";import"./SelectionManager-Bc25mfga.js";import"./Switch-ky0UvS97.js";import"./Label-BSR54Ews.js";import"./useToggleState-CCrodwRf.js";import"./ColumnLayout-DsDWXuuR.js";import"./Avatar-DHdwDP4x.js";import"./AlertIcon-CQa5yTJZ.js";import"./Image-CZmvXEiB.js";import"./Link-kGknJQZR.js";import"./ButtonView-vqtuDvT5.js";import"./ContextMenuTriggerView-M1yWRU3g.js";import"./FieldError-DsWJyZ3N.js";import"./chunk-PULGOXDA-8tYzn7uh.js";import"./LoadingSpinner-BajA46At.js";import"./Heading-BXZxzqvc.js";import"./FormField.module-CqWyJNQI.js";import"./EmulatedBoldText-D3DsYnee.js";const{action:N}=__STORYBOOK_MODULE_ACTIONS__,fr={title:"Upload/FileDropZone",component:t,parameters:{controls:{exclude:["className","controller","onChange"]}},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select file"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},P=N("submit"),a={},m={args:{isDisabled:!0}},l={args:{isReadOnly:!0}},p={args:{accept:"image/png"},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(q,{}),e.jsx(g,{children:"Drop image"}),e.jsx(v,{children:"Only image/png images are allowed."}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select image"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},c={args:{multiple:!0},render:o=>{const[i,n]=x.useState(null);return e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:n,children:[e.jsx(j,{}),e.jsx(g,{children:"Drop files"}),e.jsx(h,{name:"file",onChange:n,children:e.jsx(s,{children:"Select files"})})]}),e.jsx(F,{children:[...i??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]})}},d={render:o=>{const i=E(),n=G();return e.jsxs(W,{form:i,onSubmit:P,children:[e.jsxs(u,{children:[e.jsxs(t,{...o,onChange:r=>i.setValue("file",r),children:[e.jsx(j,{}),e.jsx(g,{children:"Drop file"}),e.jsx(n,{name:"file",rules:{required:"Please choose a file"},children:e.jsx(h,{children:e.jsx(s,{variant:"outline",color:"dark",children:"Select file"})})})]}),e.jsx(F,{children:[...i.watch("file")??[]].map(r=>e.jsx(f,{name:r.name},r.name))})]}),e.jsx(M,{children:e.jsx(s,{type:"submit",children:"Upload"})})]})}};var S,C,D;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var y,O,b;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(O=m.parameters)==null?void 0:O.docs)==null?void 0:b.source}}};var B,L,H;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,_,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    accept: "image/png"
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconImage />
          <Heading>Drop image</Heading>
          <Text>Only image/png images are allowed.</Text>
          <FileField name="file" onChange={setFiles}>
            <Button>Select image</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var R,T,Z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [files, setFiles] = useState<FileList | null>(null);
    return <Section>
        <FileDropZone {...props} onChange={setFiles}>
          <IconUpload />
          <Heading>Drop files</Heading>
          <FileField name="file" onChange={setFiles}>
            <Button>Select files</Button>
          </FileField>
        </FileDropZone>
        <FileCardList>
          {[...(files ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
        </FileCardList>
      </Section>;
  }
}`,...(Z=(T=c.parameters)==null?void 0:T.docs)==null?void 0:Z.source}}};var k,U,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: props => {
    const form = useForm<{
      file: FileList | null;
    }>();
    const Field = typedField(form);
    return <Form form={form} onSubmit={submitAction}>
        <Section>
          <FileDropZone {...props} onChange={f => form.setValue("file", f)}>
            <IconUpload />
            <Heading>Drop file</Heading>
            <Field name="file" rules={{
            required: "Please choose a file"
          }}>
              <FileField>
                <Button variant="outline" color="dark">
                  Select file
                </Button>
              </FileField>
            </Field>
          </FileDropZone>

          <FileCardList>
            {[...(form.watch("file") ?? [])].map(f => <FileCard name={f.name} key={f.name} />)}
          </FileCardList>
        </Section>
        <ActionGroup>
          <Button type="submit">Upload</Button>
        </ActionGroup>
      </Form>;
  }
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const gr=["Default","Disabled","ReadOnly","WithAcceptedTypes","Multiple","WithReactHookForm"];export{a as Default,m as Disabled,c as Multiple,l as ReadOnly,p as WithAcceptedTypes,d as WithReactHookForm,gr as __namedExportsOrder,fr as default};
