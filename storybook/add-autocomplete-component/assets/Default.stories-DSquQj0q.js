import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-BZISi7jw.js";import{T as I}from"./TextField-vhN5Y134.js";import{P as R,A as T}from"./flowComponent-B-ghCXY_.js";import{c as w}from"./clsx-B-dksMZM.js";import{u as S}from"./MenuTrigger-BuIzu3H_.js";import{$ as D}from"./useFilter-ByIzJMED.js";import{$ as P}from"./Dialog-Dv5UhFoB.js";import{C as $,M as m}from"./ContextMenuContent-BkFlb66r.js";import"./ContextMenuSection-DIi_ga2o.js";import{L as g}from"./Label-vcyG9Kja.js";import{u as L,F as _,a as B}from"./Form-BEHOL9Cg.js";import{a as p}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./TextFieldBase-CLIS40hz.js";import"./FieldError-CQ9RqGuN.js";import"./IconApp-vAs-LrT2.js";import"./IconWarning-DIwIHW1V.js";import"./Form-CFR8hFHG.js";import"./useFocusRing-DzGSygZM.js";import"./index-IBhSrjl6.js";import"./useLabel-Hju3pN3c.js";import"./utils-CoJ4Pv5P.js";import"./Text-CZDyhmV-.js";import"./filterDOMProps-CeZl_uWj.js";import"./FieldDescription-C5C32NLJ.js";import"./Text-0kfk3I9S.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./TextField-C3MHW-0G.js";import"./Input-CQEr2Ble.js";import"./Hidden-DBxI3g91.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./Label-CogRznyR.js";import"./useTextField-Ky_TF6kW.js";import"./useFormReset-CilIRCFg.js";import"./useControlledState-4nfZ-XMX.js";import"./useFocusable-BAuzoEaO.js";import"./context-CYJytrr2.js";import"./useStatic-CJjI45yZ.js";import"./useCollator-C0JtIjTO.js";import"./Button-CNfiUnPd.js";import"./ProgressBar-DVTCW4l9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BZLMvQVL.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-r6uz-b7H.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-BSANup6i.js";import"./SearchField-ClNjenZO.js";import"./Group-B--aSUI3.js";import"./SelectionManager-CPBFXyQE.js";import"./useEvent-CPQp9FCP.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./Popover-BCw_JhSW.js";import"./DialogTriggerView-BknCs3BK.js";import"./Action-CBGMaTwy.js";import"./getActionGroupSlot-Bf7lgP6T.js";import"./dynamic-DKDa4OpU.js";import"./Switch-CTR0X8it.js";import"./useToggleState-DZNedwC8.js";import"./v4-CtRu48qb.js";const E="flow--autocomplete--context-menu",H="flow--autocomplete--menu-item",h={contextMenu:E,menuItem:H},c=r=>{const{children:a,className:u,controller:f,...x}=r,s=S("ContextMenu"),o=f??s,n=w(h.autocomplete,u),{contains:d}=D({sensitivity:"base"}),e=(V,O)=>d(V,O),F=y.useRef(null),N={ContextMenu:{triggerRef:F,closeOverlay:!1,className:h.contextMenu,placement:"bottom start",controller:o,MenuItem:{className:h.menuItem}},TextField:{onFocus:()=>o.open(),onInput:()=>o.open()}};return t.jsx(R,{props:N,children:t.jsx(T,{children:t.jsx("div",{className:n,ref:F,children:t.jsx(P,{...x,filter:e,children:a})})})})};c.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{controller:{required:!1,tsType:{name:"OverlayController"},description:""}},composes:["Omit","PropsWithClassName"]};const oe={title:"Form Controls/Autocomplete",component:c,render:r=>t.jsxs(c,{...r,children:[t.jsx(I,{children:t.jsx(g,{children:"Autocomplete"})}),t.jsxs($,{children:[t.jsx(m,{textValue:"Show details",onAction:p("Show details"),children:"Show details"}),t.jsx(m,{textValue:"Rename",onAction:p("Rename"),children:"Rename"}),t.jsx(m,{textValue:"Delete",onAction:p("Delete"),children:"Delete"})]})]})},i={},l={render:r=>{const a=["html","files"],u=["html/test1.txt","html/test2.txt"],f=["files/test1.txt","files/test2.txt"],[x,s]=y.useState(a),o=L(),n=S("ContextMenu"),d=e=>{e==="html"&&s(u),e==="files"&&s(f),e.includes(".")&&n.close()};return t.jsx(_,{onSubmit:()=>p("submit"),form:o,children:t.jsxs(c,{controller:n,...r,children:[t.jsx(B,{name:"file",children:t.jsx(I,{children:t.jsx(g,{children:"Autocomplete"})})}),t.jsx($,{children:x.map(e=>t.jsx(m,{onAction:()=>{o.setValue("file",e),d(e)},textValue:e,children:e},e))})]})})}};var C,j,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(M=(j=i.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var A,b,v;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => {
    const filesBase = ["html", "files"];
    const filesHtml = ["html/test1.txt", "html/test2.txt"];
    const filesFiles = ["files/test1.txt", "files/test2.txt"];
    const [files, setFiles] = useState<string[]>(filesBase);
    const form = useForm();
    const contextMenuController = useOverlayController("ContextMenu");
    const replaceFiles = (value: string) => {
      if (value === "html") {
        setFiles(filesHtml);
      }
      if (value === "files") {
        setFiles(filesFiles);
      }
      if (value.includes(".")) {
        contextMenuController.close();
      }
    };
    return <Form onSubmit={() => action("submit")} form={form}>
        <Autocomplete controller={contextMenuController} {...props}>
          <Field name="file">
            <TextField>
              <Label>Autocomplete</Label>
            </TextField>
          </Field>

          <ContextMenu>
            {files.map(f => <MenuItem key={f} onAction={() => {
            form.setValue("file", f);
            replaceFiles(f);
          }} textValue={f}>
                {f}
              </MenuItem>)}
          </ContextMenu>
        </Autocomplete>
      </Form>;
  }
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const re=["Default","Files"];export{i as Default,l as Files,re as __namedExportsOrder,oe as default};
