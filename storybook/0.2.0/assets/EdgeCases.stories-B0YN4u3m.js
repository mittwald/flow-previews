import{j as r}from"./jsx-runtime-CLpGMVip.js";import"./index-Cf9XvIV_.js";import{a as g,C as c,M as m}from"./ContextMenuContent-wdz-Xk5o.js";import"./ContextMenuSection-DC_ZGzpF.js";import{B as l}from"./Button-5K6As1fH.js";import M from"./Default.stories-wvAtMxMd.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./flowComponent-DxoeBNET.js";import"./index-CFEY-m6m.js";import"./index-ByctJgwf.js";import"./index-CoqFY4cC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./Popover-CzxIYYfo.js";import"./MenuTrigger-CI18I4dx.js";import"./context-BTwlF01N.js";import"./useSelector-C73ywo-I.js";import"./Dialog-Cg9ydWeK.js";import"./Button-D76OI_vo.js";import"./utils-DjOXyFua.js";import"./ProgressBar-ZJQghT0g.js";import"./Label-B3UarT55.js";import"./Hidden-Cfl4ctnK.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ByHVstPj.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-CNLx9CCl.js";import"./useFocusRing-CvMz7Q_e.js";import"./usePress-lNW0gZrs.js";import"./RSPContexts-BG_vMng8.js";import"./OverlayArrow-DCI-Qj_s.js";import"./useControlledState-19OAjgUP.js";import"./Collection-BmK4LEIa.js";import"./CollectionBuilder-DjKT8coY.js";import"./Separator-BgTw7aj1.js";import"./Text-BK3pbL47.js";import"./SelectionManager-BEf0hUjE.js";import"./useEvent-C6dKIdOv.js";import"./useCollator-B1faT6Ju.js";import"./FocusScope-yrzOGIns.js";import"./VisuallyHidden-EoGVKpYJ.js";import"./DialogTriggerView-DSXQhr6V.js";import"./IconApp-DYEF1khQ.js";import"./Action-CbAzsLN7.js";import"./browser-B1A6F7LW.js";import"./getActionGroupSlot-BUNV9fjp.js";import"./dynamic-DKDa4OpU.js";import"./IconWarning-DAGL0qzm.js";import"./Switch-C8imXJp5.js";import"./Label-CytRHo_R.js";import"./useToggleState-B1C2yV77.js";import"./useFormReset-SCbFK273.js";import"./Wrap-DQq6jo70.js";import"./Text-CaginIuu.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./LoadingSpinner-C2VB9MCl.js";import"./Separator-CWLNltWq.js";import"./Heading-rI9d-VUT.js";import"./Heading-DOuNAX0R.js";import"./Avatar-CAxekhTd.js";import"./react-children-utilities-BAwZnu7W.js";import"./Initials-DDBfa11p.js";const wr={...M,title:"Actions/ContextMenu/Edge Cases"},t={args:{width:400},render:e=>r.jsxs(g,{children:[r.jsx(l,{children:"Trigger"}),r.jsxs(c,{...e,children:[r.jsx(m,{children:p.medium}),r.jsx(m,{children:p.medium})]})]})},o={render:e=>r.jsxs(g,{children:[r.jsx(l,{children:"Trigger"}),r.jsx(c,{...e,children:Array(20).fill("").map((T,i)=>r.jsxs(m,{children:["Item ",i+1]},i))})]})};var n,s,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    width: 400
  },
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <MenuItem>{dummyText.medium}</MenuItem>
        <MenuItem>{dummyText.medium}</MenuItem>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var a,d,x;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        {Array(20).fill("").map((value, index) => <MenuItem key={index}>Item {index + 1}</MenuItem>)}
      </ContextMenu>
    </ContextMenuTrigger>
}`,...(x=(d=o.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Sr=["LongTexts","LongList"];export{o as LongList,t as LongTexts,Sr as __namedExportsOrder,wr as default};
