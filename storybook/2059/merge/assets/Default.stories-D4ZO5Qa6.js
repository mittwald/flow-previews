import{j as r}from"./iframe-4Q3VdU3W.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-C7969b2c.js";import{L as m}from"./Link-Dz5bdeR6.js";import{H as s}from"./HeaderNavigation-5cDvQUJa.js";import{B as o}from"./Button-DtfrCWpg.js";import{T as p}from"./Text-Dj8BftP4.js";import{I as B}from"./Image-9IoYviGW.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-C5SZn_n3.js";import{C as y,M as c}from"./MenuItem-myB1On1e.js";import{C as A}from"./ContextMenuTrigger-Y6rbBNJo.js";import"./ContextMenuSection-DHdrwNVp.js";import{a as D,M as E}from"./Modal-DJ2fR1yv.js";import{H as G}from"./Heading-EO3yxMsA.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CWhymxNW.js";import"./index-D-slKUrQ.js";import"./index-PS7XpSls.js";import"./useLocalizedStringFormatter-BfINV5Nx.js";import"./context-Ctn7vzaA.js";import"./utils-BDqSegOF.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-gN-0t-oA.js";import"./useFocus-B23mYmqe.js";import"./useFocusRing-JPznIV6A.js";import"./useFocusable-xMViE0rI.js";import"./dynamic-D7Z9JYdX.js";import"./LoadingSpinner-DB05D1_y.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CVw6sY0j.js";import"./ProgressBar-DDVhQ4Au.js";import"./Label-BPYRgbkp.js";import"./Hidden-B-Sfeo6e.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BefUj7Q1.js";import"./EmulatedBoldText-VlnzXvNR.js";import"./Text-CbQs5VbJ.js";import"./AlertIcon-B58OD8-G.js";import"./Action-BPLFS_xS.js";import"./context-HST9WQNh.js";import"./useStatic-J4yhNwyX.js";import"./getActionGroupSlot-DbevwPeS.js";import"./Popover-Df0MAnGC.js";import"./useOverlayController-CkYiJEJ3.js";import"./OverlayContextProvider-DGLKtVpY.js";import"./Dialog-eTJli1DK.js";import"./RSPContexts-BraqArs8.js";import"./OverlayArrow-C0bCojbN.js";import"./useControlledState-DDubLIo_.js";import"./Collection-BcdTAldV.js";import"./CollectionBuilder-Djb2_WqG.js";import"./context-Crr8Yx7q.js";import"./Separator-V229l451.js";import"./SelectionManager-DSIHg9Rl.js";import"./useEvent-X_MmbY8S.js";import"./useCollator-DKF-AEK0.js";import"./FocusScope-CdBaHhXi.js";import"./VisuallyHidden-Bs3ruDlE.js";import"./ClearPropsContextView-QV--h8ts.js";import"./Switch-BTK0hS5E.js";import"./useMakeFocusable-yVzA5tdL.js";import"./useToggleState-C3qElwVR.js";import"./useFormReset-DJaP_Vl0.js";import"./OverlayTrigger-C1FeU66V.js";import"./ControlledNotification-Btlekvi2.js";import"./DialogTriggerView-DWxklP8W.js";import"./Overlay-BtAMoL97.js";import"./ButtonView-q4bNv5oP.js";import"./Heading-Bob5JKW8.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
