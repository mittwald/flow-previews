import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import"./IconApp-W8-S6AAB.js";import{k as B,l as H,g as S,m as v,n as C}from"./IconWarning-BUA863Ku.js";import{L as m}from"./Link-iCB64Jmn.js";import{H as s}from"./HeaderNavigation-Ca9rIKUx.js";import{B as o}from"./Button-CnylmBwY.js";import{T as p}from"./Text-CiS2CEB-.js";import{I as L}from"./Image-C7SQT7VW.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-CGOvanLK.js";import{a as b,C as D,M as c}from"./ContextMenuContent-BMYTiYC0.js";import"./ContextMenuSection-C2hykenk.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-CAbCjQLO.js";import{H as W}from"./Heading-CnJT-hhq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPJHi05H.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-DmntCNXg.js";import"./useLocalizedStringFormatter-z2l0_8m0.js";import"./utils-B8p6n-_S.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-D_abas1X.js";import"./useFocus-0lzzAyJ_.js";import"./useFocusRing-C08ZnYSv.js";import"./useFocusable-dJayk3b7.js";import"./dynamic-DKDa4OpU.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Cpk2RUSc.js";import"./Button-DlOLKXkK.js";import"./ProgressBar-CMGFgh_N.js";import"./Label-CRtDyyLG.js";import"./Hidden-kqRI_mPI.js";import"./useLabel-DjubqfyV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Text-CUmgXOYU.js";import"./react-children-utilities-fm2cgFnI.js";import"./Action-Y9vUQ_E8.js";import"./context-Cn4G8t_B.js";import"./useStatic-Boalhu8h.js";import"./getActionGroupSlot-CX7tjRC3.js";import"./Popover-Bdm-58uP.js";import"./OverlayTrigger-nnEEvTPt.js";import"./Dialog-TWm-lwKH.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-BxXqfwgF.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-B-y1oEx2.js";import"./CollectionBuilder-cVXcHFND.js";import"./Separator-D0eYhWhZ.js";import"./SelectionManager-BB9PAfr3.js";import"./useEvent-BxpP-RFo.js";import"./useCollator-CB8NJtcR.js";import"./FocusScope-2Ar0PVcM.js";import"./VisuallyHidden-DCnFJsId.js";import"./DialogTriggerView-DOqXLm-q.js";import"./Switch-C-KlLhsA.js";import"./Label-CzYjGm4V.js";import"./useToggleState-DbTFgthm.js";import"./useFormReset-m57alayF.js";import"./Overlay-7kvvRC--.js";import"./Header-pixPf_Js.js";import"./ButtonView-DQ_sSzhC.js";import"./Heading-Cc6WIW0_.js";const ro={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:i=>r.jsxs(s,{"aria-label":"Header navigation",...i,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},n={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(f=a.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,k,T;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(k=n.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const oo=["Default","WithContextMenu","Dark","Light"];export{a as Dark,t as Default,n as Light,e as WithContextMenu,oo as __namedExportsOrder,ro as default};
