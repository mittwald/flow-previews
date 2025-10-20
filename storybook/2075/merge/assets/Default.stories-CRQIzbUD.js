import{j as r}from"./iframe-D3XbVUAE.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-DpoKEiS2.js";import{L as m}from"./Link-Bj7b6F5o.js";import{H as s}from"./HeaderNavigation-D51Rqy5h.js";import{B as o}from"./Button-DI43yX0M.js";import{T as p}from"./Text-D8iCnd0a.js";import{I as B}from"./Image-HITXA7gT.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DHcbLvlT.js";import{C as y,M as c}from"./MenuItem-CxhSaw1W.js";import{C as A}from"./ContextMenuTrigger-CWcwxnbZ.js";import"./ContextMenuSection-CLGzRvVY.js";import{a as D,M as E}from"./Modal-Cm0i1rh6.js";import{H as G}from"./Heading-BRhqG7uw.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-EDib50S8.js";import"./index-CK8n9fzK.js";import"./index-BE_iNncf.js";import"./useLocalizedStringFormatter-CjS_r_W_.js";import"./context-DmwBBPOa.js";import"./utils-BWY6h_sn.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DzXxx4G-.js";import"./useFocus-DS8-NOtK.js";import"./useFocusRing-C2luJKmh.js";import"./useFocusable-ZL6151jY.js";import"./dynamic-GIq4BKTG.js";import"./LoadingSpinner-LCrs4rVN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BiJGxu5-.js";import"./ProgressBar-BpanmrTJ.js";import"./Label-DVxhCXlj.js";import"./Hidden-Cd6SNVLk.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DZQtGRWw.js";import"./EmulatedBoldText-C38wPnte.js";import"./Text-D1dMR7Bg.js";import"./AlertIcon-Bt_v5txF.js";import"./Action-CZBfRLDN.js";import"./context-Do4klyfP.js";import"./useStatic-B8Xkh7jF.js";import"./getActionGroupSlot-CXPM0c0n.js";import"./Popover-C3EPav8D.js";import"./useOverlayController-DFrmP01N.js";import"./OverlayContextProvider-DEtRDXPF.js";import"./Dialog-D6YV7AqF.js";import"./RSPContexts-BakoLx3C.js";import"./OverlayArrow-9doXs0eI.js";import"./useControlledState-Dbx7ZwrT.js";import"./Collection-C3nUBF4h.js";import"./CollectionBuilder-B_u7Wa0Q.js";import"./SelectionIndicator-Cq3hNpeI.js";import"./Separator-BCuxzefv.js";import"./SelectionManager-CUwtbCt4.js";import"./useEvent-nRU769M-.js";import"./useCollator-zmWlXBku.js";import"./FocusScope-Bgf4u7XC.js";import"./VisuallyHidden-ChWvOP_M.js";import"./ClearPropsContextView-Ck5uY1-8.js";import"./Switch-BDC2z-6r.js";import"./useMakeFocusable-C7JQv0_C.js";import"./useToggleState-CeAt6cNe.js";import"./useFormReset-BLKvBmEx.js";import"./OverlayTrigger-CzfFaC6q.js";import"./ControlledNotification-GK4LrAeo.js";import"./DialogTriggerView-Cj3hqKEZ.js";import"./Overlay-D__jgUj0.js";import"./ButtonView--GJz09NZ.js";import"./Heading-C9v1QtIG.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
